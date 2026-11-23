# Yusuf Umer Portfolio (Future Interns Task 1)

Personal portfolio website for a full-stack and mobile developer.

Live site: https://yusufumer-portfolio.vercel.app/

## Features

- Responsive layout with light and dark theme
- Projects, skills, services and resume sections
- Contact form with validation that sends email notifications through EmailJS
- SEO: meta tags, Open Graph, structured data, `sitemap.xml` and `robots.txt`

## Tech Stack

React, TypeScript, Vite, Tailwind CSS, EmailJS

## Run Locally

1. Clone the repo and run `npm install`
2. Copy `.env.example` to `.env` and add your EmailJS keys
3. Run `npm run dev`
4. Open the local URL that Vite prints in the terminal

## Environment Variables

| Name | Description |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

## Author

Yusuf Umer: https://github.com/codewithyusa