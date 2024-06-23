import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// web services each tile data
const services = [
  // personal
  {
    title: "Personal",
    slug: "personal",
    image: "/personal.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Unleash the power of personalization. From customization to optimization, I cater to your specific requirements, delivering results that exceed expectations.",
  },
  // corporate 
  {
    title: "Corporate",
    slug: "corporate",
    image: "/corporate.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Elevate your business with corporate solutions tailored to your needs. From seamless integration to unparalleled support, I ensure your enterprise operates at its peak efficiency.",
  },
  // ecommerce 
  {
    title: "Ecommerce",
    slug: "ecommerce",
    image: "/ecommerce.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Dive into the world of online commerce with Ecommerce solutions, designed to boost your digital presence and foster growth.",
  },
  // custom 
  {
    title: "Custom",
    slug: "custom",
    image: "/custom.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
    ],
    desc: "From concept to execution, my custom development services provide the foundation for your startup's success, combining creativity, expertise, and unparalleled support.",
  },
  // deployment
  {
    title: "Deployment",
    slug: "deployment",
    image: "/deployment.png",
    features: [
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "SEO friendly",
      "Premium support",
    ],
    desc: "If you're looking for someone to deploy and maintain your project, then you're in a right place! You can leave it for me and get rid of extra work.",
  },
];

// projects each tile data
const projects = [
  // Naseerfolio
  {
    title: "Naseerfolio",
    tagline: "Building the Future of Mobile Apps",
    slug: "naseerfolio",
    images: ["/naseerfolio-1.gif", "/naseerfolio-2.gif", "/naseerfolio-image.jpg"],
    keywords: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "Node Mailer"],
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
  // read verve
  {
    title: "Read Verve",
    slug: "read-verve",
    tagline: "Unleash Your Intellectual Journey with Read Verve",
    images: [
      "/read-verve.gif",
      "/read-verve-sm.png",
    ],
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
    images: ["/skill-joiner-1.gif", "/skill-joiner-2.gif",],
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
  { title: "Next.js", logo: `html` },
  {
    title: "React.js",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    title: "Tailwind CSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  { title: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
  {
    title: "Express.js",
    logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
  {
    title: "MongoDB",
    logo: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg",
  },
  {
    title: "Git",
    logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    title: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
  },
];

// socials links
const social_links = [
  {
    jsx: <Linkedin />,
    link: "https://www.linkedin.com/in/just-abdullah/",
  },
  { jsx: <Github />, link: "https://github.com/just-abdullah-dev" },
  { jsx: <Twitter />, link: "https://twitter.com/just_abdullah_3" },
  { jsx: <Instagram />, link: "https://instagram.com/just_abdullah_._" },
  {
    jsx: <Facebook />,
    link: "https://www.facebook.com/profile.php?id=100063930870228",
  },
];

export { services, social_links, projects, skills };
