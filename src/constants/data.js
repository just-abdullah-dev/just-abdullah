import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// web services each tile data
const services = [
  // personal
  {
    cta: "Get Portfolio",
    title: "Personal",
    slug: "personal",
    image: "/personal.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
      "Tailored customization",
      "Personalized optimization",
    ],
    desc: "Unleash the power of personalization. From customization to optimization, I cater to your specific requirements, delivering results that exceed expectations.",
  },
  // corporate
  {
    cta: "Elevate Your Brand",
    title: "Corporate",
    slug: "corporate",
    image: "/corporate.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
      "Seamless integration",
      "Enterprise-level solutions",
    ],
    desc: "Elevate your business with corporate solutions tailored to your needs. From seamless integration to unparalleled support, I ensure your enterprise operates at its peak efficiency.",
  },
  // ecommerce
  {
    cta: "Start Selling",
    title: "Ecommerce",
    slug: "ecommerce",
    image: "/ecommerce.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
      "Boost digital presence",
      "Foster growth",
    ],
    desc: "Dive into the world of online commerce with Ecommerce solutions, designed to boost your digital presence and foster growth.",
  },
  // custom
  {
    cta: "Create Your Vision",
    title: "Custom",
    slug: "custom",
    image: "/custom.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
      "Creative solutions",
      "Expertise-driven development",
    ],
    desc: "From concept to execution, my custom development services provide the foundation for your startup's success, combining creativity, expertise, and unparalleled support.",
  },
  // deployment
  {
    cta: "Launch Your Project",
    title: "Deployment",
    slug: "deployment",
    image: "/deployment.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
      "Hassle-free deployment",
      "Project maintenance",
    ],
    desc: "If you're looking for someone to deploy and maintain your project, then you're in a right place! You can leave it for me and get rid of extra work.",
  },
];

// projects each tile data
const projects = [
  {
    title: "AWC Veterinary Ordering Platform",
    tagline: "B2B veterinary compounding pharmacy e-commerce",
    slug: "awc-veterinary-platform",
    images: ["/projects/awc-2.png", "/projects/awc-3.png", "/projects/awc-4.png", "/projects/awc-5.png", "/projects/awc-1.png"],
    keywords: ["Next.js", "React.js", "PostgreSQL", "Prisma", "RBAC", "B2B Workflows"],
    repo: "",
    link: "",
    startedOn: "01-Oct-2025",
    completedOn: "31-Mar-2026",
    summary: "A clinic-first ordering system for Australian veterinarians to register clinics, order compounded medications, and manage prescriptions.",
    desc: "## AWC Veterinary Ordering Platform\n\nAnimal Welfare Compounding (AWC) Platform is a B2B e-commerce system for a veterinary compounding pharmacy in Australia. Veterinarians register clinics, order compounded medications including quality-assured products and custom made-to-order formulations, and manage prescriptions for animal patients.\n\nBuilt complete order workflows, clinic management, prescription handling, flexible pricing with dynamic percentage adjustments, product-level overrides, secure authentication, and approval-based access control.",
  },
  {
    title: "Astra Wellness Telehealth",
    tagline: "Phase 1 telehealth platform for doctors and patients",
    slug: "astra-wellness-telehealth",
    images: ["/projects/astra-1.png", "/projects/astra-2.png", "/projects/astra-3.png", "/projects/astra-4.png", "/projects/astra-5.png"],
    keywords: ["Next.js", "Telehealth", "Appointments", "Video Consultations", "Chat", "AI Transcription"],
    repo: "",
    link: "https://astra-wellness-platform-764800041404.us-central1.run.app/",
    startedOn: "01-Jan-2026",
    completedOn: "Present",
    summary: "A telehealth product covering doctor onboarding, patient booking, appointment requests, video consultations, chat, and AI medical summaries.",
    desc: "## Astra Wellness Telehealth — Phase 1\n\nA telehealth web application with doctor and patient roles. Doctors can register, manage professional profiles, select medical categories and specialties, upload certifications, define availability, accept or reject appointments, conduct video consultations, and chat with patients. Patients can browse doctors, view availability, request appointments, join consultations, and chat before and after visits.\n\nPhase 1 scope includes category-based doctor discovery, calendar availability, appointment status tracking, appointment history, secure one-to-one meetings, in-meeting chat, AI-powered medical transcription, and consultation summarization.",
  },
  {
    title: "Bonny",
    tagline: "Events, subscriptions, and QR voucher redemption",
    slug: "bonny",
    images: ["/projects/bonny-0.png", "/projects/bonny-1.png", "/projects/bonny-2.png", "/projects/bonny-3.png", "/projects/bonny-4.png", "/projects/bonny-5.png", "/projects/bonny-6.png"],
    keywords: ["React.js", "Next.js", "TypeScript", "Supabase", "Stripe", "QR"],
    repo: "",
    link: "https://bonny.at",
    startedOn: "01-Jun-2025",
    completedOn: "30-Sept-2025",
    summary: "An event discovery and voucher management app serving customers, businesses, and super admins with QR redemption and Stripe payments.",
    desc: "## Bonny — Events & Voucher Platform\n\nBonny is a Next.js 15 web application for event discovery and voucher management. It serves three distinct user roles: regular users, businesses, and super admins. The app uses Supabase for data storage, Stripe for payments, and includes QR code scanning, event management, and voucher redemption.\n\nBuilt interactive dashboards, QR-based voucher redemption, subscription features, and admin panels for users, events, and businesses under Inostrik as a client project.",
  },
  {
    title: "Nigotis",
    tagline: "Accounting Software and Business Automation Tool v1",
    slug: "nigotis",
    images: [
      "/nigotis-3.png",
      "/nigotis-1.png",
      "/nigotis-2.png",
      "/nigotis-4.png",
      "/nigotis-5.png",
    ],
    keywords: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Node.js",
      "TailwindCSS",
      "Framer Motion",
      "AWS S3",
      "Node Mailer",
    ],
    repo: "",
    link: "https://nigotis-fe.vercel.app/",
    startedOn: "20-Sep-2024",
    completedOn: "31-Jan-2025",
    summary: "A business automation suite for invoices, payroll, assets, expenses, authentication, and role-based access control.",
    desc: "## Nigotis - Accounting Software and Business Automation tool for Growing Businesses\n\n### Introduction:\nNigotis is a web based software to create invoices, manage company assets, expenses, employees payrolls efficiently.\n\n\n\nUse Following test credentials:\n\n- Email: abdullah@justxtech.com\n\n- Password: 12345678",
  },
  {
    title: "Sehat-AI",
    tagline: "Deep learning chest X-ray screening system",
    slug: "sehat-ai",
    images: ["/projects/sehat-ai-0.png", "/projects/sehat-ai-1.png", "/projects/sehat-ai-1.jpg", "/projects/sehat-ai-2.jpg"],
    keywords: ["Python", "FastAPI", "Deep Learning", "React Native", "Expo", "CNN"],
    repo: "",
    link: "",
    startedOn: "01-Jan-2025",
    completedOn: "Present",
    summary: "An AI-assisted medical imaging workflow for TB and Pneumonia screening using CNN models, FastAPI, and mobile delivery.",
    desc: "## Sehat-AI — Final Year Project (FYP)\n\nBuilt a deep learning model for detecting TB and Pneumonia from chest X-rays, integrated with a FastAPI backend and React Native mobile frontend for real-time predictions. The project applies CNN architectures for medical image classification and focuses on practical AI-assisted screening workflows.",
  },
  {
    title: "Aban Edu",
    tagline: "Multi-tenant SaaS school management system",
    slug: "aban-edu",
    images: ["/projects/aban-edu-1.png", "/projects/aban-edu-2.png", "/projects/aban-edu-3.png", "/projects/aban-edu-4.png", "/projects/aban-edu-5.png"],
    keywords: ["Next.js", "PostgreSQL", "Prisma", "SaaS", "RBAC", "Multi-tenant"],
    repo: "",
    link: "",
    startedOn: "01-Jan-2026",
    completedOn: "Present",
    summary: "A school management SaaS with multi-tenant architecture, fee voucher automation, roles, and PostgreSQL-first schema design.",
    desc: "## Aban Edu — SaaS School Management System\n\nDesigned a scalable multi-tenant school management system with a complex PostgreSQL schema, Prisma ORM, async fee voucher generation, role-based system design, and planned mobile integration for real-world deployment.",
  },

  // Dynam galaxy
  {
    title: "Dynam Galaxy",
    tagline: "Calm Solutions for Fast Startups",
    slug: "dynam-galaxy",
    images: ["/dynam-1.png", "/dynam-2.png", "/dynam-3.png"],
    keywords: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
      "Magic UI",
      "Node Mailer",
    ],
    repo: "",
    link: "https://www.dynamgalaxy.com/",
    startedOn: "18-Sep-2024",
    completedOn: "20-Oct-2024",
    desc: "## Dynam Galaxy - Software Company\n\n### Introduction:\n\nDynam Galaxy is a software company that provides a variety of digital solutions, helping startups and businesses grow efficiently. The company specializes in UI/UX design, web and mobile development, and digital marketing, offering tailored strategies for different industries.\n\n### Services:\n\n- UI/UX Design for web and mobile applications.\n- Custom software and web development solutions.\n- Digital marketing strategies to enhance online presence.\n- Scalable and efficient solutions for startups and enterprises.\n\n### Technologies & Tools:\n\n- Modern design and development frameworks.\n- Scalable cloud solutions.\n- Data-driven marketing strategies.\n\nVisit the official website to learn more about Dynam Galaxy's services.",
  },
  // Naseerfolio
  {
    title: "Naseerfolio",
    tagline: "Building the Future of Mobile Apps",
    slug: "naseerfolio",
    images: [
      "/naseerfolio-1.gif",
      "/naseerfolio-2.gif",
      "/naseerfolio-image.jpg",
    ],
    keywords: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "Node Mailer",
    ],
    repo: "",
    link: "https://protech-coders.com/",
    startedOn: "15-Jun-2024",
    completedOn: "21-Jun-2024",
    desc: `## Naseerfolio - Muhammad Naseer Portfolio \n\n ### Introduction:

Naseerfolio is a professional portfolio website designed for Naseer, a talented Flutter mobile app developer. This sleek and modern portfolio showcases Naseer's skills, projects, and experience, providing a comprehensive overview of his expertise. Explore Naseerfolio to learn more about his work and get in touch through the integrated contact form.
\n\n
### Features:
\n\n
- Browse through a portfolio of mobile app development projects.
- Learn about Naseer's skills, experience, and background.
- Contact Naseer directly using the integrated contact form.
- Enjoy smooth animations and a responsive design for an optimal user experience.
\n\n\n\n
### Technologies Used:
\n\n
- Next.js
- React.js
- Tailwind CSS
- Nodemailer (used in contact form to send mail)
- Framer Motion (animations)`,
  },
  // Activus
  {
    title: "Activus",
    tagline: "Bringing your ideas to life with cutting-edge technology.",
    slug: "activus",
    keywords: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "Spline",
      "GSAP",
      "Magic UI",
      "Node Mailer",
    ],
    images: ["/activus.png"],
    repo: "",
    link: "https://activus1.vercel.app",
    startedOn: "07-July-2024",
    completedOn: "25-July-2024",
    desc: `## Activus - Your Partner in Technology

### Introduction:
Activus is a premier technology agency offering a wide range of services tailored to meet diverse business needs. Whether it's innovative web development, dynamic animations, or seamless integrations, Activus excels in transforming ideas into reality. The agency specializes in creating visually stunning and technically robust solutions that engage and captivate target audiences.

### Features:
- Explore a rich portfolio showcasing a diverse range of tech projects across various industries.
- Discover the agency's expertise in leveraging advanced animation techniques, utilizing tools like Framer Motion, GSAP, and Spline.
- Experience the seamless integration of Magic UI components, enhancing interactivity and user experience.
- Easily connect with the team through an integrated contact form for personalized consultations.
- Benefit from responsive, aesthetically pleasing designs that provide a flawless experience across all devices.

### Technologies Used:
- Next.js
- React.js
- Tailwind CSS
- Nodemailer (used in the contact form to send emails)
- Framer Motion (animations)
- GSAP (animations)
- Spline (3D graphics)
- Magic UI (animation components)
`,
  },
  // read verve
  {
    title: "Read Verve",
    slug: "read-verve",
    tagline: "Unleash Your Intellectual Journey with Read Verve",
    images: ["/read-verve.gif", "/read-verve-sm.png"],
    keywords: ["Next.js", "React.js", "Node.js", "MongoDB"],
    repo: "https://github.com/just-abdullah-dev/read-verve-next-js/",
    link: "",
    startedOn: "01-Sept-2023",
    completedOn: "24-Nov-2023",
    desc: `## Read Verve: Empowering Knowledge through Diverse Blogs\n\n### Introduction to Read Verve\n\nWelcome to Read Verve, a dynamic blog website designed to enrich your knowledge base. Dive into a myriad of articles spanning various categories, curated to cater to your diverse interests and informational needs.\n\n\n\n### Blog Website Features\n\n- **Categorized Articles**: Explore a wide range of topics across distinct categories.\n\n- **User Engagement**: Interact with the community by commenting on posts.\n\n- **Personalized Profiles**: Customize your profile with details like name, avatar, and password settings.\n\n### Administrative Control\n\n- **Multiple Admin Management**: The platform supports multiple admins, granting them comprehensive control over user activities and site management.\n\n- **Admin Privileges**: Admins hold authority over user management tasks, including user deletion and role assignments (e.g., admin or author).\n\n### Author Capabilities\n\n- **Content Creation**: Authors contribute and publish their blogs on the platform.\n\n- **Editing Tools**: Authors can revise and improve their published content as needed.\n\n`,
  },
  // skill joiner
  {
    title: "Skill Joiner",
    tagline: "Skills you need delivered with speed",
    slug: "skill-joiner",
    images: ["/skill-joiner-1.gif", "/skill-joiner-2.gif"],
    keywords: ["Next.js", "React.js", "Node.js", "MongoDB"],
    repo: "https://github.com/just-abdullah-dev/skill-joiner-nextjs",
    link: "",
    startedOn: "01-Dec-2023",
    completedOn: "22-Jan-2024",
    desc: `### Introduction:\n\nSkill Joiner is a special platform for PAF-IAST University. It helps smart
    students who are good at lots of things like coding, designing, SEO, and more.
    This platform is designed to let students craft their profiles, showcasing their
    expertise and portfolios. Skill Joiner acts as a central hub, facilitating
    connections with various opportunities within and beyond the university's
    scope.\n\n### Connecting Skillful Individuals:\n\nSkill Joiner connects people who needs skill persons (from PAF-IAST),
    providing easy interface to find out the expert for their work. Users can post a
    job and students will bid on the job. Or users can request a service from
    specific student.\n\n### Community Forums for Learning:\n\nThis platform also has community forums for each profession. Where
    students can communicate with each other to learn and grow together.`,
  },
  // quizical app
  {
    title: "Quizical",
    tagline: "Challenge Your Mind, Expand Your Knowledge",
    slug: "quizical",
    images: ["/quizical.gif"],
    keywords: ["React.js", "Trivia API"],
    repo: "https://github.com/just-abdullah-dev/Quizical-App",
    link: "https://quizical-app.netlify.app/",
    startedOn: "04-Sept-2023",
    completedOn: "05-Sept-2023",
    desc: `### Introduction:\n\nQuizical is an engaging and educational quiz app that provides an interactive way to challenge your knowledge on various topics. Whether you're looking for a fun way to pass the time or want to learn something new, Quizical has you covered.\n\n### Features:\n\n- Choose the number of multiple-choice questions you want to answer.\n\n- Select a quiz category from a wide range of topics.\n\n- Pick a difficulty level that suits your knowledge.\n\n- Receive instant feedback on your answers.\n\n### How to Play:\n\n1. **Launch the App**: Open the Quizical app in your web browser.\n\n2. **Customize Your Quiz**: Select the number, type, and difficulty level of questions.\n\n3. **Start the Quiz**: Click the "Start Quiz" button to begin.\n\n4. **Answer Questions**: Answer each multiple-choice question by selecting the correct option.\n\n5. **Get Feedback**: Receive immediate feedback on your answer, including whether it's correct or not.\n\n6. **View Your Score**: Keep track of your score as you progress through the quiz.\n\n7. **Finish the Quiz**: Complete the quiz and see your final score.\n\n`,
  },
  // tenzies app
  {
    title: "Tenzies Game",
    tagline: "Roll, match, conquer - Tenzies Game!",
    slug: "tenzies",
    images: ["/tenzies.gif"],
    keywords: ["React.js"],
    repo: "https://github.com/just-abdullah-dev/Tenzies-Game",
    link: "https://tenzies-game-ar.netlify.app/",
    startedOn: "01-Sept-2023",
    completedOn: "02-Sept-2023",
    desc: `### Introduction:\n\nTenzies game is a fun and addictive dice game where the goal is to roll as many dice with the same number as possible within a limited time. The more dice with the same number you roll, the higher your score. Challenge yourself and see how high you can score!\n\n### Features:\n\n- Roll dice and aim for the highest score.\n\n- Track your best score, total rolls, and game duration.\n\n- Automatically save your best score to local storage for future reference.\n\n- Enjoy a clean and responsive user interface.\n\n### Technologies Used:\n\n- React.js\n\n- HTML5\n\n- CSS3\n\n- JavaScript\n\n### Acknowledgments:\n\nI would like to thank **[Bob Ziroll](https://www.coursera.org/instructor/~130316767)** for providing the guidance and inspiration to create this project.`,
  },
];

// skills each tile data
const skills = [
  { title: "Next.js", category: "Frontend", level: "Production" },
  { title: "React.js", category: "Frontend", level: "Production" },
  { title: "Tailwind CSS", category: "Frontend", level: "Production" },
  { title: "Framer Motion", category: "Frontend", level: "Production" },
  { title: "React Native", category: "Mobile", level: "Building" },
  { title: "Expo", category: "Mobile", level: "Building" },
  { title: "Node.js", category: "Backend", level: "Production" },
  { title: "Express.js", category: "Backend", level: "Production" },
  { title: "FastAPI", category: "Backend", level: "Building" },
  { title: "Python", category: "AI / ML", level: "Applied" },
  { title: "PostgreSQL", category: "Database", level: "Production" },
  { title: "Prisma ORM", category: "Data", level: "Production" },
  { title: "MongoDB", category: "Database", level: "Production" },
  { title: "Supabase", category: "Backend", level: "Production" },
  { title: "Google Colab", category: "AI / ML", level: "Applied" },
  { title: "RAG", category: "Learning", level: "Learning" },
  { title: "REST APIs", category: "Architecture", level: "Production" },
  { title: "RBAC", category: "Security", level: "Production" },
];

const workExperience = [
  {
    role: "Full Stack Developer",
    company: "Peregrine Ventures AI",
    period: "Oct 2025 – Mar 2026",
    type: "B2B Platform",
    highlights: [
      "Built a B2B veterinary ordering platform with complete order workflows, clinic management, and prescription handling.",
      "Designed flexible pricing with dynamic percentage adjustments and product-level overrides.",
      "Implemented secure authentication and approval-based access control for users and admins.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Inostrik",
    period: "Jul 2025 – Jan 2026",
    type: "Client Products",
    highlights: [
      "Developed modern landing pages with responsive UI and smooth animations using Next.js and React.",
      "Built CMS-driven features using Supabase for blogs, banners, and dynamic content.",
      "Integrated frontend experiences with backend services for scalable content delivery.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Mahhir 360",
    period: "Jun 2025 – Aug 2025",
    type: "Restaurant SaaS",
    highlights: [
      "Developed frontend features for a restaurant management system using Next.js and Tailwind CSS.",
      "Improved UI responsiveness and streamlined user workflows in collaboration with the team.",
    ],
  },
   {
    role: "Full Stack Developer",
    company: "Nigotis Backed by Raqqamiyya",
    period: "Oct 2024 – Jan 2025",
    type: "Accounting Software",
    highlights: [
      "Built and optimized UI components for Accounting Software and Business Automation Tool using Next.js, React.js and Tailwind CSS.",
      "Managed the complete project development independently, improving application performance and overall user experience.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "Powersoft 19",
    period: "Jun 2024 – Aug 2024",
    type: "Healthcare System",
    highlights: [
      "Built and optimized UI components for a healthcare system using React and Tailwind CSS.",
      "Enhanced application performance and user experience through collaborative development.",
    ],
  },
];

const productsToLaunch = [
  {
    name: "Aban Edu",
    status: "Building",
    accent: "green",
    desc: "A multi-tenant school management SaaS with fee automation, roles, and PostgreSQL-first architecture.",
  },
  {
    name: "Aban Arena",
    status: "Coming Soon",
    accent: "orange",
    desc: "A mobile-first arena booking product for availability, reservations, payments, and sports venue operations.",
  },
  {
    name: "Sehat-AI",
    status: "Research",
    accent: "gray",
    desc: "AI-assisted chest X-ray screening workflow powered by CNN models, FastAPI, and mobile delivery.",
  },
];

const learningFocus = [
  "Retrieval-Augmented Generation (RAG)",
  "Production AI API design",
  "Scalable multi-tenant SaaS",
  "Mobile product delivery with Expo",
];

const education = {
  institute: "Pak-Austria Fachhochschule (PAF-IAST), Haripur, KPK",
  period: "Oct 2022 – May 2026",
  degree: "Bachelor of Software Engineering (Final Year)",
  cgpa: "3.51",
  highlights: [
    "Dean's List recipient — 4 consecutive times throughout degree program.",
    "Teaching Assistant for 7 courses across 4 semesters, including Programming Fundamentals, ICT, DSA, Calculus, Applied Physics, Computer Networks, and Discrete Structures.",
    "Relevant coursework: Deep Learning, Computer Networks, Database Systems, Software Engineering, Discrete Structures, and Algorithms.",
  ],
};

// socials links
const social_links = [
  {
    jsx: <Linkedin className={"text-gray-500 hover:text-white"} />,
    link: "https://www.linkedin.com/in/just-abdullah-/",
  },
  { jsx: <Github className={"text-gray-500 hover:text-white"} />, link: "https://github.com/just-abdullah-dev" },
  { jsx: <Twitter className={"text-gray-500 hover:text-white"} />, link: "https://twitter.com/just_abdullah_3" },
  { jsx: <Instagram className={"text-gray-500 hover:text-white"} />, link: "https://instagram.com/just_abdullah_._" },
  {
    jsx: <Facebook className={"text-gray-500 hover:text-white"} />,
    link: "https://www.facebook.com/profile.php?id=100063930870228",
  },
];

const reviews = [
  {
    name: "ABDUL RAHMAN ASIM",
    profession: "Founder & CEO of Dynam Galaxy",
    avatar: "/asim.jpg",
    projectSlug: "dynam-galaxy",
    review: `I have worked with a bunch of developers for the Dynam Galaxy website, but none could get it right until Abdullah stepped in. The guy is an absolute Next.js genius. He pulled off what others couldn’t, with insane dedication, problem-solving skills, and next-level expertise.

Honestly, I was losing hope after hiring multiple devs, but Abdullah just made it happen. He handled every challenge like a pro and delivered a site that’s not just functional but super smooth, fast, and exactly how I envisioned it.

If you need a Website especially Next.js expert who actually delivers, Abdullah is your guy. Can’t recommend him enough!
`,
  },
  {
    name: "MUHAMMAD NASEER",
    profession: "Flutter Mobile App Developer",
    avatar: "/naseer.jpeg",
    projectSlug: "naseerfolio",
    review: `I'm absolutely delighted with the exceptional work Abdullah has done on my portfolio website! The final result exceeded my expectations in every way. The website is not only visually stunning, but also incredibly functional and user-friendly. Abdullah demonstrated a remarkable understanding of my vision and requirements, and his attention to detail and expertise in web development are truly impressive. The website is a testament to his creativity, professionalism, and dedication to delivering high-quality work. I couldn't be happier with the outcome and would highly recommend Abdullah to anyone seeking a talented and reliable web developer.`,
  },
  {
    name: "Hayan Khan",
    profession: "Senior React Developer",
    avatar: "/hayan.jpg",
    projectSlug: "activus",
    review: `Working with Abdullah was a wonderful experience, I was looking for a developer to do one of my extra project and I cannot trust everyone with my work but Abdullah always went the extra mile, did everything on time and had a very creative and optimized approach from start to end. He has a very good design eye. I am looking forward to future collaborations with him. Much recommended!`,
  },
];

export {
  services,
  social_links,
  projects,
  skills,
  reviews,
  workExperience,
  productsToLaunch,
  learningFocus,
  education,
};
