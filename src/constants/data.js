import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// web services each tile data
const services = [
  {
    title: "Personal",
    slug: "personal",
    image: "/per.png",
    features: [
      "Website pages: 10",
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "Website languages: 2",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Unleash the power of personalization. From customization to optimization, I cater to your specific requirements, delivering results that exceed expectations.",
  },
  {
    title: "Corporate",
    slug: "corporate",
    image: "/corporate-2.png",
    features: [
      "Website pages: 10",
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "Website languages: 2",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Elevate your business with corporate solutions tailored to your needs. From seamless integration to unparalleled support, I ensure your enterprise operates at its peak efficiency.",
  },
  {
    title: "Ecommerce",
    slug: "ecommerce",
    image: "/ecommerce-2.png",
    features: [
      "Website pages: 10",
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "Website languages: 2",
      "SEO friendly",
      "Premium support",
    ],
    desc: "Dive into the world of online commerce with Ecommerce solutions, designed to boost your digital presence and foster growth.",
  },
  {
    title: "Custom",
    slug: "custom",
    image: "/custom.png",
    features: [
      "Website pages: 10",
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "Website languages: 2",
      "SEO friendly",
      "Premium support",
    ],
    desc: "From concept to execution, my custom development services provide the foundation for your startup's success, combining creativity, expertise, and unparalleled support.",
  },
  {
    title: "Deployment",
    slug: "deployment",
    image: "/deployment.png",
    features: [
      "Website pages: 10",
      "Fast & optimized",
      "Custom Domain Connection",
      "Free SSL",
      "Website languages: 2",
      "SEO friendly",
      "Premium support",
    ],
    desc: "If you're looking for someone to deploy and maintain your project, then you're in a right place! You can leave it for me and get rid of extra work.",
  },
];

// projects each tile data
const projects = [
  // read verve
  {
    title: "Read Verve",
    slug: "read-verve",
    images: ["/read-verve.gif", "/read-verve-sm-1.gif", "read-verve-sm-2.gif"],
    keyword: ["Next.js", "React.js", "Node.js", "MongoDB"],
    repo: "https://github.com/just-abdullah-dev/read-verve-next-js/",
    link: "",
    completedOn: "24-Nov-2023",
    desc: `## Read Verve: Empowering Knowledge through Diverse Blogs

    ### Introduction to Read Verve
    
    Welcome to Read Verve, a dynamic blog website designed to enrich your knowledge base. Dive into a myriad of articles spanning various categories, curated to cater to your diverse interests and informational needs.
    
    #### Blog Website Features
    
    - **Categorized Articles**: Explore a wide range of topics across distinct categories.
    - **User Engagement**: Interact with the community by commenting on posts.
    - **Personalized Profiles**: Customize your profile with details like name, avatar, and password settings.
    
    #### Administrative Control
    
    - **Multiple Admin Management**: The platform supports multiple admins, granting them comprehensive control over user activities and site management.
    - **Admin Privileges**: Admins hold authority over user management tasks, including user deletion and role assignments (e.g., admin or author).
    
    #### Author Capabilities
    
    - **Content Creation**: Authors contribute and publish their blogs on the platform.
    - **Editing Tools**: Authors can revise and improve their published content as needed.
    
    ### Just Abdullah: A Full-Stack Developer's Inaugural Project
    
    I am Abdullah, a passionate full-stack developer who developed the Read Verve. This project signifies a significant milestone in my career, showcasing my proficiency in leveraging the **Next.js** framework. Through Read Verve, I aimed to create an interactive and informative space for users, providing valuable content and empowering contributors with diverse functionalities.
    
    Join us on Read Verve and embark on an enriching journey through a world of insightful content and collaborative learning.
    `,
  },
  // skill joiner
  {
    title: "Skill Joiner",
    slug: "skill-joiner",
    images: ["/skill-joiner-1.gif", "/skill-joiner-2.gif"],
    keyword: ["Next.js", "React.js", "Node.js", "MongoDB"],
    repo: "https://github.com/just-abdullah-dev/skill-joiner-nextjs",
    link: "",
    completedOn: "22-Jan-2024",
    desc: `###Introduction:
    Skill Joiner is a special platform for PAF-IAST University. It helps smart
    students who are good at lots of things like coding, designing, SEO, and more.
    This platform is designed to let students craft their profiles, showcasing their
    expertise and portfolios. Skill Joiner acts as a central hub, facilitating
    connections with various opportunities within and beyond the university's
    scope.
    Skill Joiner connects people who needs skill persons (from PAF-IAST),
    providing easy interface to find out the expert for their work. Users can post a
    job and students will bid on the job. Or users can request a service from
    specific student.
    This platform also has community forums for each profession. Where
    students can communicate with each other to learn and grow together.`,
  },
  // quizical app
  {
    title: "Quizical",
    slug: "quizical",
    images: ["/quizical.gif"],
    keyword: ["React.js", "Trivia API"],
    repo: "https://github.com/just-abdullah-dev/Quizical-App",
    link: "https://quizical-app.netlify.app/",
    completedOn: "05-Sep-2024",
    desc: `# Quizical App

    ## Introduction
    Hello, I'm Abdullah Rahim, a frontend developer with expertise in React.js, HTML, CSS, and JavaScript. I created the Quizical app, a quiz-based game that allows users to select the number of multiple-choice questions, category, and difficulty level to test their knowledge.
    
    ## About the App
    
    Quizical is an engaging and educational quiz app that provides an interactive way to challenge your knowledge on various topics. Whether you're looking for a fun way to pass the time or want to learn something new, Quizical has you covered.
    
    ### Features
    - Choose the number of multiple-choice questions you want to answer.
    - Select a quiz category from a wide range of topics.
    - Pick a difficulty level that suits your knowledge.
    - Receive instant feedback on your answers.
    
    ## How to Play
    1. **Launch the App**: Open the Quizical app in your web browser.
    2. **Customize Your Quiz**:
       - Select the number of questions you want to answer.
       - Choose a quiz category that interests you.
       - Pick a difficulty level based on your knowledge level.
    3. **Start the Quiz**: Click the "Start Quiz" button to begin.
    4. **Answer Questions**: Answer each multiple-choice question by selecting the correct option.
    5. **Get Feedback**: Receive immediate feedback on your answer, including whether it's correct or not.
    6. **View Your Score**: Keep track of your score as you progress through the quiz.
    7. **Finish the Quiz**: Complete the quiz and see your final score.
    `,
  },
  // tenzies app
  {
    title: "Tenzies Game",
    slug: "tenzies",
    images: ["/tenzies.gif"],
    keyword: ["React.js"],
    repo: "https://github.com/just-abdullah-dev/Tenzies-Game",
    link: "https://tenzies-game-ar.netlify.app/",
    completedOn: "02-Sep-2024",
    desc: `# Tenzies-Game

    ## Introduction
    Hello, I'm Abdullah Rahim, a frontend developer with expertise in React.js, HTML, CSS, and JavaScript. I created this Tenzies game as part of a course project and added additional functionality to enhance the gaming experience.
    
    ## About the Game
    Tenzies is a fun and addictive dice game where the goal is to roll as many dice with the same number as possible within a limited time. The more dice with the same number you roll, the higher your score. Challenge yourself and see how high you can score!
    
    ### Features
    - Roll dice and aim for the highest score.
    - Track your best score, total rolls, and game duration.
    - Automatically save your best score to local storage for future reference.
    - Enjoy a clean and responsive user interface.
    
    ## Technologies Used
    
    - React.js
    - HTML5
    - CSS3
    - JavaScript
    
    ## Acknowledgments
    
    I would like to thank [Bob Ziroll](https://www.coursera.org/instructor/~130316767) for providing the guidance and inspiration to create this project.
    
    #tenzies #react #reactjs 
    `,
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
    link: "https://www.linkedin.com/in/abdullah-0b816122a/",
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
