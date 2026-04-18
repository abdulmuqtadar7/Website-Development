/* ===================================================
   Personal Portfolio — Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- DOM References ---------- */
  const header      = document.getElementById('header');
  const navToggle   = document.getElementById('nav-toggle');
  const navMenu     = document.getElementById('nav-menu');
  const navLinks    = document.querySelectorAll('.nav__link');
  const contactForm = document.getElementById('contact-form');
  const formStatus  = document.getElementById('form-status');
  const yearSpan    = document.getElementById('current-year');

  /* ---------- Set current year ---------- */
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ---------- Mobile Navigation ---------- */
  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  /* ---------- Active link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop    = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId     = section.getAttribute('id');
      const link          = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (link) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', () => {
    highlightNavOnScroll();
    handleHeaderScroll();
  }, { passive: true });

  /* ---------- Scroll-reveal animation ---------- */
  const revealElements = document.querySelectorAll(
    '.section__title, .section__subtitle, .about__text, .about__skills, ' +
    '.project__card, .contact__info, .contact__form'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ---------- Contact Form Validation ---------- */
  function validateField(input) {
    const name     = input.name;
    const value    = input.value.trim();
    const errorEl  = document.getElementById(`${name}-error`);
    let errorMsg   = '';

    if (!value) {
      errorMsg = `${capitalize(name)} is required.`;
    } else if (name === 'email' && !isValidEmail(value)) {
      errorMsg = 'Please enter a valid email address.';
    }

    if (errorEl) {
      errorEl.textContent = errorMsg;
    }

    if (errorMsg) {
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
    }

    return errorMsg === '';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Live validation on blur
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form__input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs  = contactForm.querySelectorAll('.form__input');
      let allValid  = true;

      inputs.forEach(input => {
        if (!validateField(input)) {
          allValid = false;
        }
      });

      if (!allValid) return;

      // Simulate form submission
      const submitBtn     = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled  = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(() => {
        contactForm.reset();
        inputs.forEach(input => input.classList.remove('invalid'));

        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.className   = 'form__status success';

        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message';

        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className   = 'form__status';
        }, 5000);
      }, 1500);
    });
  }

  /* ---------- Smooth-scroll polyfill for older Safari ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
