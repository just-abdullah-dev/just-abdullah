import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

// web services each tile data 
const services = [
    { title: "Personal", slug: "personal", desc: "Unleash the power of personalization. From customization to optimization, I cater to your specific requirements, delivering results that exceed expectations."},
    { title: "Corporate", slug: "corporate", desc: "Elevate your business with corporate solutions tailored to your needs. From seamless integration to unparalleled support, I ensure your enterprise operates at its peak efficiency."},
    { title: "Ecommerce", slug: "ecommerce", desc: "Dive into the world of online commerce with Ecommerce solutions, designed to boost your digital presence and foster growth."},
    { title: "Custom", slug: "custom", desc: "From concept to execution, my custom development services provide the foundation for your startup's success, combining creativity, expertise, and unparalleled support."},
    { title: "Deployment", slug: "deployment", desc: "If you're looking for someone to deploy and maintain your project, then you're in a right place! You can leave it for me and get rid of extra work."},
  ];

// projects each tile data 
const projects = [
    { title: "Personal", slug: "personal", desc: "Unleash the power of personalization. From customization to optimization, I cater to your specific requirements, delivering results that exceed expectations."},
    { title: "Corporate", slug: "corporate", desc: "Elevate your business with corporate solutions tailored to your needs. From seamless integration to unparalleled support, I ensure your enterprise operates at its peak efficiency."},
    { title: "Ecommerce", slug: "ecommerce", desc: "Dive into the world of online commerce with Ecommerce solutions, designed to boost your digital presence and foster growth."},
    { title: "Custom", slug: "custom", desc: "From concept to execution, my custom development services provide the foundation for your startup's success, combining creativity, expertise, and unparalleled support."},
    { title: "Deployment", slug: "deployment", desc: "If you're looking for someone to deploy and maintain your project, then you're in a right place! You can leave it for me and get rid of extra work."},
  ];
  
  
// skills each tile data 
const skills = [
  { title: "Next.js", logo: `html`},
  { title: "React.js", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"},
  { title: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"},
  { title: "Node.js", logo: "https://nodejs.org/static/images/logo.svg"},
  { title: "Express.js", logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"},
  { title: "MongoDB", logo: "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg"},
  { title: "Git", logo: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},
  { title: "GitHub", logo: "https://www.vectorlogo.zone/logos/github/github-tile.svg"},
]

// socials links
  const social_links = [
    {jsx:<Linkedin />, link:"https://www.linkedin.com/in/abdullah-0b816122a/"},
    {jsx:<Github />, link:'https://github.com/just-abdullah-dev'},
    {jsx:<Twitter />, link:'https://twitter.com/just_abdullah_3'},
    {jsx:<Instagram />, link:'https://instagram.com/just_abdullah_._'},
    {jsx:<Facebook />, link:'https://www.facebook.com/profile.php?id=100063930870228'},
  ];

  export {
    services,
    social_links,
    projects,
    skills,
  }

