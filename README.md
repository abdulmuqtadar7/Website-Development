# Sterling Realty — Luxury Real Estate Website

A modern, responsive real estate website for **Sterling Realty**, featuring luxury property listings, an AI chatbot assistant, mortgage calculator, contact form, newsletter signup, and dark mode — all in a single-page application.

## 🌐 Live Site

**[View the website →](https://abdulmuqtadar7.github.io/Website-Development/)**

## Features

### Pages (hash-based routing)
- **Home** (`#home`) — Hero section, stats bar, about Marcus Sterling, services grid, and 5 client testimonials
- **Listings** (`#listings`) — Filter bar (city, type, price) with 6 luxury property cards, detail modals, and mortgage calculator
- **Contact** (`#contact`) — Contact form (name, email, phone, interest, budget, message) and info card with office details

### Interactive Features
- **AI Chatbot "Max"** — Floating chat assistant with guided flows for Buy, Sell, Rent, and Book Viewing
- **Mortgage Calculator** — Calculate monthly payments based on home price, down payment, interest rate, and loan term
- **Dark Mode** — Toggle between light and dark themes with persistent preference (localStorage)
- **Property Filters** — Filter listings by city, type, and price range
- **Property Modals** — Click "View Details" to see full property info in an overlay modal
- **Newsletter Signup** — Subscribe to receive the latest listings via email
- **Scroll Animations** — Reveal-on-scroll elements using IntersectionObserver
- **Responsive Design** — Mobile hamburger menu, responsive grids, works on all screen sizes

### Property Listings
| Property | City | Type | Price |
|----------|------|------|-------|
| Modern Villa | Beverly Hills | Villa | $1,250,000 |
| City Penthouse | Manhattan | Penthouse | $3,800,000 |
| Family Home | Austin | House | $875,000 |
| Luxury Condo | Miami | Condo | $650,000 |
| Lakefront Retreat | Lake Tahoe | Retreat | $2,100,000 |
| Downtown Loft | Chicago | Loft | $480,000 |

## Tech Stack

- **HTML5** — Semantic markup, single `index.html` file
- **CSS3** — Custom properties (BEM naming), grid, flexbox, keyframe animations, dark theme
- **Vanilla JavaScript** — Hash routing, DOM manipulation, chatbot logic, filtering, mortgage math
- **Google Fonts** — Playfair Display (headings) + Inter (body)
- **Unsplash** — High-quality property and profile images

Zero dependencies — no frameworks, no build tools. Just open `index.html` in a browser.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/abdulmuqtadar7/Website-Development.git
   ```
2. Open `index.html` in your browser — no build step required.

Or visit the **[live GitHub Pages site](https://abdulmuqtadar7.github.io/Website-Development/)**.

## Project Structure

```
├── index.html    # Complete single-page application (HTML + CSS + JS)
└── README.md     # This file
```