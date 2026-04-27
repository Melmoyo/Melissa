import type { Project } from "../types/datatypes";
import mercatoApp from "../assets/images/mercato-store-screenshot.png";

import fitnessApp from "../assets/images/fitness-booking-app-screenshot.png";
import wavestatApp from "../assets/images/wave-stats-app-screenshot.png";
import mercato from "../assets/images/mercato_confirmation_browser_screenshot.png";
import fixit from "../assets/images/fixit_welcome_browser_screenshot.png";
import devpulse from "../assets/images/devpulse_newsletter_browser_screenshot.png";
import vaultly from "../assets/images/vaultly_passwordreset_browser_screenshot.png";
import stackd from "../assets/images/stackd_promo_browser_screenshot.png";
import bellabites from "../assets/images/bellabites.png";
import subtrack from "../assets/images/subscription-tracker.png";
export const ProjectsData: Project[] = [
  {
    image: subtrack,
    title: "SubTrack ",
    description:
      "Track subscriptions with multi-currency support ,monitor monthly and annual spend, toggle between currencies, and manage due dates all in one place.",
    techStack: ["React", "TailwindCSS", "TypeScript"],
    liveDemo: "https://subsrtrack.netlify.app/",
    sourceCode: "https://github.com/Melmoyo/Subscription-Tracker",
    type: "frontend",
  },
  {
    image: wavestatApp,
    title: "WaveStat",
    description:
      " Wave Stat is a React-based dashboard that consumes the Last.fm API to surface K-pop listening statistics. It features dynamic data visualizations using Recharts, including pie and bar charts.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    liveDemo: "https://wavestat.netlify.app/",
    sourceCode: "https://github.com/Melmoyo/Wave-Stat",
    type: "frontend",
  },
  {
    image: mercatoApp,
    title: "Mercato Store App",
    description:
      "A React-based e-commerce app powered by the Fake Store API.Features include product listing, search functionality, andcategory filtering, built to simulate a real-world shopping experience.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "FakeStoreApi"],
    liveDemo: "https://mercatostore.netlify.app/",
    sourceCode: "https://github.com/Melmoyo/Mercato-Store",
    type: "frontend",
  },
  {
    image: fitnessApp,
    title: "Fitness Booking App",
    description:
      " Fitness platform with a landing page, user authentication, anda personal dashboard for booking and managing training sessions. Includes an admin portal with a full overview of all bookings.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveDemo: "https://fitnessbookingapp.netlify.app/",
    sourceCode: "https://github.com/Melmoyo/Fitness-Booking-App",
    type: "frontend",
  },
  {
    image: vaultly,
    title: "Vaultly Password Reset Email ",
    description:
      "Minimal transactional security email for a SaaS password manager. Single focus layout with info cards, warning box, fallback URL and security notice.",
    techStack: ["HTML", "CSS", "MJML "],
    liveDemo: "https://emaildeveloper.netlify.app/vaultly/password-reset-email",
    sourceCode:
      "https://github.com/Melmoyo/Email-Templates/tree/main/email-templates/vaultly",
    type: "email",
  },
  {
    image: fixit,
    title: "FixIt Welcome Email",
    description:
      "Onboarding email for a local services directory.Built with MJML featuring a dark navy hero, multi-column category grid, how-it-works steps and testimonial section.",
    techStack: ["HTML", "CSS", "MJML "],
    liveDemo: "https://emaildeveloper.netlify.app/fixit/welcome-email",
    sourceCode:
      "https://github.com/Melmoyo/Email-Templates/tree/main/email-templates/fixit",
    type: "email",
  },
  {
    image: devpulse,
    title: "DevPulse Newsletter Email",
    description:
      "Editorial weekly newsletter for a developer digest brand. Includes a hero story, numbered story list, tip of the week box, tools section and community poll.",
    techStack: ["HTML", "CSS", "MJML "],
    liveDemo: "https://emaildeveloper.netlify.app/devpulse/newsletter-email",
    sourceCode:
      "https://github.com/Melmoyo/Email-Templates/tree/main/email-templates/devpulse",
    type: "email",
  },
  {
    image: mercato,
    title: "Mercato Confirmation Email",
    description:
      "Transactional order confirmation email for an e-commerce brand. Includes product line items, order summary table, delivery banner, upsell section and dark themed footer.",
    techStack: ["HTML", "CSS", "MJML "],
    liveDemo: "https://emaildeveloper.netlify.app/mercato/confirmation-email",
    sourceCode:
      "https://github.com/Melmoyo/Email-Templates/tree/main/email-templates/mercato",
    type: "email",
  },
  {
    image: stackd,
    title: "Stackd Black Friday Promo Email",
    description:
      "High-energy promotional email for a tech accessories store. Features a bold countdown timer, 2x2 product deal grid, featured deal spotlight and urgency strip.",
    techStack: ["HTML", "CSS", "MJML "],
    liveDemo: "https://emaildeveloper.netlify.app/stackd/black-friday-email",
    sourceCode:
      "https://github.com/Melmoyo/Email-Templates/tree/main/email-templates/stackd",
    type: "email",
  },
  {
    image: bellabites,
    title: "Bella Bites",
    description:
      "Bella Bites is a modern restaurant landing page featuring a clean hero section, structured menu display, featured meals, and smooth responsive layout designed for an engaging user experience across all devices.",
    techStack: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
    liveDemo: "https://bellabites.netlify.app/",
    sourceCode: "https://github.com/Melmoyo/Bella-Bites",
    type: "frontend",
  },
];
