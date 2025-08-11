# Indranil's Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Smooth animations with Framer Motion
- Contact form with EmailJS integration
- Modern UI with Tailwind CSS

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons

## Setup and Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd indranil_portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Environment Variables
   - Copy the `.env.example` file to `.env`
   ```bash
   cp .env.example .env
   ```
   - Update the `.env` file with your EmailJS credentials

4. Start the development server
   ```bash
   npm run dev
   ```

## EmailJS Setup

This project uses EmailJS for the contact form. To set it up:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add your credentials to the `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Deployment

To build for production:

```bash
npm run build
```

The build files will be in the `dist` directory, which you can deploy to any static hosting service.
