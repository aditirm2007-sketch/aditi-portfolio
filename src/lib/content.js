export const profile = {
  name: "Aditi RM",
  role: "UI/UX Designer & Full-Stack Developer",
  tagline: "I design and build products end-to-end — interfaces, code, and the business running on top of them.",
  email: "aditirm2007@gmail.com",
  phone: "+91 89718 78301",
  linkedin: "https://www.linkedin.com/in/aditi-rm-465032378",
  github: "https://github.com/aditirm2007-sketch",
  location: "Bangalore, India",
};

export const featuredWork = [
  {
    slug: "stansv",
    name: "STANSV",
    tag: "Gate Automation & Fabrication",
    role: "UI/UX Designer & Full-Stack Developer",
    period: "Jul 2026 — Present",
    description:
      "Designed and built the company's entire digital platform solo, end-to-end: a Next.js/React frontend with reusable, component-based architecture, and a Node.js/Express + Supabase (PostgreSQL) backend, deployed on Vercel. Includes a full e-commerce and quotation pipeline with interactive product customizers, PhonePe + UPI payments, and internal ERP/CRM tooling spanning two branches — client management, attendance & payroll, e-invoicing, role-based staff logins, and a finance tracker with auditor-ready exports.",
    tools: ["Next.js", "React", "Node.js", "Express", "Supabase", "Vercel"],
    image: "/images/stansv/quote-tool.jpg",
    image2: "/images/stansv/products.jpg",
    link: "https://stansv.com",
    overview:
      "STANSV is a gate automation and fabrication company running on a platform I designed and built entirely solo — from the first wireframe to the production Node.js/Supabase backend. It's the single largest system I've shipped: public marketing site, e-commerce and quotation flow, and internal ERP/CRM tooling, all live and in daily use across two branches.",
    problem:
      "A gate fabrication business run on WhatsApp quotes, paper measurements, and spreadsheets — no way for customers to self-serve a quote, and no shared system for staff across two branches to track orders, payments, or attendance.",
    roleDetail:
      "Sole designer and developer. Owned the full stack: UX research and wireframes, visual design, frontend build, backend/database architecture, deployment, and ongoing iteration based on real staff and customer feedback.",
    process: [
      {
        title: "Customer-facing quoting",
        body: "Designed an interactive gate customizer — material, pattern, and dimension inputs drive a live preview and instant cost estimate, replacing manual WhatsApp back-and-forth.",
      },
      {
        title: "Payments & checkout",
        body: "Built a full e-commerce flow for gate motors and accessories with PhonePe gateway and UPI QR scan-to-pay integration.",
      },
      {
        title: "Internal operations",
        body: "Built role-based staff logins, attendance & payroll, e-invoicing, and a finance tracker with auditor-ready exports — spanning the Bangalore and Hassan branches.",
      },
      {
        title: "Notifications",
        body: "Wired up a multi-channel system (browser push, WhatsApp, SMS, email) to automate order and follow-up alerts without manual chasing.",
      },
    ],
    outcome:
      "A live production platform handling real customer quotes and payments, running two branches' worth of internal operations, with a 500+ SKU catalogue and a custom internal estimator — while I continue to run the sales cycle on top of it as Business Development Executive.",
    gallery: [
      { src: "/images/stansv/quote-tool.jpg", caption: "Interactive gate customizer & live cost estimator" },
      { src: "/images/stansv/products.jpg", caption: "Product catalogue cards" },
      { src: "/images/stansv/hero.jpg", caption: "Public marketing site" },
      { src: "/images/stansv/projects.jpg", caption: "Project gallery" },
    ],
  },
  {
    slug: "alufab",
    name: "Alufab Facade Solutions",
    tag: "Freelance Web Design & Development",
    role: "Freelance Web Designer & Developer",
    period: "Aug 2026",
    description:
      "Designed and built a multi-page marketing site solo in a 3-week freelance engagement for a Bengaluru-based facade and architectural solutions company — Home, About, Gallery, and Contact pages, including a filterable project gallery across 6 service categories and a 5-stage process visualization, using reusable, component-based architecture.",
    tools: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/alufab/hero.jpg",
    image2: "/images/alufab/gallery.jpg",
    link: "https://alufab.co.in",
    overview:
      "Alufab Facade Solutions is a Bengaluru-based façade and architectural fabrication company. They came to me needing a credible digital presence to match a decade of real client work — I designed and built the full site solo in a 3-week freelance engagement.",
    problem:
      "An established facade engineering business with strong offline credibility but no website — no way to showcase past projects, explain services, or let architects and builders get in touch.",
    roleDetail:
      "Freelance designer and developer, working directly with the client to scope pages, design the visual identity, and build the full responsive frontend.",
    process: [
      {
        title: "Information architecture",
        body: "Scoped four core pages — Home, About, Gallery, Contact — structured around how architects and builders evaluate a fabrication vendor.",
      },
      {
        title: "Filterable project gallery",
        body: "Built a gallery across 6 service categories (curtain wall & glazing, spider glazing & railings, skylights, MS fabrication, and more) so visitors can browse by the work that matches their need.",
      },
      {
        title: "Process visualization",
        body: "Designed a 5-stage process section translating the company's real fabrication workflow into a clear, visual sequence for prospective clients.",
      },
      {
        title: "Contact & conversion",
        body: "Built a direct enquiry form alongside maps and contact details, routing leads straight into their pipeline.",
      },
    ],
    outcome:
      "A fully responsive, production site live at alufab.co.in, giving a decade-old fabrication business a digital front door that matches the quality of their actual work.",
    gallery: [
      { src: "/images/alufab/hero.jpg", caption: "Homepage hero" },
      { src: "/images/alufab/gallery.jpg", caption: "Filterable project gallery" },
      { src: "/images/alufab/about.jpg", caption: "About page" },
      { src: "/images/alufab/contact.jpg", caption: "Contact & enquiry form" },
    ],
  },
];

export const explorations = [
  {
    slug: "laundry-app",
    name: "LAVATO",
    tag: "UI/UX Case Study · Figma",
    description:
      "An early mobile app concept for an on-demand laundry service — research, user flows, wireframes through to hi-fi screens.",
    cards: [
      { src: "/images/laundry/cards/01-cover.jpg", label: "Cover" },
      { src: "/images/laundry/cards/06-problem.jpg", label: "Problem statement" },
      { src: "/images/laundry/cards/07-empathy.jpg", label: "Empathy map" },
      { src: "/images/laundry/cards/05-persona.jpg", label: "User persona" },
      { src: "/images/laundry/cards/02-app.jpg", label: "Native app" },
      { src: "/images/laundry/cards/08-userflow.jpg", label: "User flow" },
      { src: "/images/laundry/cards/09-sitemap.jpg", label: "Site map" },
      { src: "/images/laundry/cards/10-midfi.jpg", label: "Wireframes" },
      { src: "/images/laundry/cards/11-colors.jpg", label: "Colour palette" },
      { src: "/images/laundry/cards/12-typography.jpg", label: "Typography" },
      { src: "/images/laundry/cards/04-hifi.jpg", label: "Hi-fi screens" },
    ],
  },
  {
    slug: "ocean-editorial",
    name: "Ocean Editorial",
    tag: "Editorial Design · Figma",
    description:
      "A high-fidelity ocean-conservation editorial exploring typography, grid systems, and visual hierarchy.",
    cards: [
      { src: "/images/ocean/cards/01-cover.jpg", label: "Cover" },
      { src: "/images/ocean/cards/02-options.jpg", label: "Content slide — options" },
      { src: "/images/ocean/cards/04-abcd.jpg", label: "Content slide — A/B/C/D" },
      { src: "/images/ocean/cards/05-icons.jpg", label: "Content slide — icons" },
      { src: "/images/ocean/cards/03-colors.jpg", label: "Colour system" },
    ],
  },
];

export const posterWork = [
  { slug: "apocalypse", name: "Apocolyps", image: "/images/posters/apocalypse.jpg" },
  { slug: "car", name: "Timeless Elegance", image: "/images/posters/car.jpg" },
  { slug: "walkingdead", name: "The Era of the Walking Dead", image: "/images/posters/walkingdead.jpg" },
  { slug: "dahmer1", name: "Jeffrey Dahmer I", image: "/images/posters/dahmer1.jpg" },
  { slug: "burnout", name: "Burnout Is Not Success", image: "/images/posters/burnout.jpg" },
  { slug: "rockthevibe", name: "Rock the Vibe", image: "/images/posters/rockthevibe.jpg" },
  { slug: "walkingdead2", name: "The Era of the Walking Dead (II)", image: "/images/posters/walkingdead2.jpg" },
  { slug: "dahmer2", name: "Jeffrey Dahmer II", image: "/images/posters/dahmer2.jpg" },
];

export const skills = [
  {
    category: "Tools",
    items: ["Figma", "Framer", "Webflow", "ProtoPie", "Adobe Illustrator", "Adobe Photoshop", "Sketch", "FigJam"],
  },
  {
    category: "Development",
    items: ["Next.js", "React", "JavaScript (ES6+)", "Node.js", "Express", "Supabase", "REST APIs", "Tailwind CSS", "Git", "Vercel"],
  },
  {
    category: "Design",
    items: ["User Research", "Wireframing & Prototyping", "User Flows & IA", "Usability Testing", "Design Systems", "Responsive Design"],
  },
  {
    category: "Business",
    items: ["Business Development", "Client Relations & Sales", "Vyapar (Billing & Accounting)"],
  },
];

export const education = {
  school: "M S Ramaiah University of Applied Sciences",
  degree: "Bachelor of Design in Interaction Design",
  period: "2025 — 2029 (Expected)",
  location: "Bangalore, India",
  gpa: "8.05",
};

export const achievements = [
  "Awarded by AIR (All India Radio), Prasar Bharati for notable contribution.",
  "Certified at a global design event for excellence in design.",
  "Co-founded and managed a small-scale product-based business.",
  "Completed a 3-month UI/UX certification in Figma covering wireframing, prototyping, and design systems.",
];
