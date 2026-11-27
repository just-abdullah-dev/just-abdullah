export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://justabdullah.com";

export const SITE = {
  name: "Abdullah",
  brand: "Just Abdullah",
  titleDefault: "Abdullah — Full Stack Engineer & Founder",
  description:
    "Product-minded Full Stack Engineer and founder building scalable SaaS, mobile platforms, and AI-integrated systems. Based in Pakistan. Available for serious product builds.",
  email: "just.abdullah.dev@gmail.com",
  phone: "+923140571198",
  phoneDisplay: "+92 314 0571198",
  location: "Haripur, Pakistan",
  locale: "en_US",
  twitter: "@just_abdullah_3",
  linkedin: "https://www.linkedin.com/in/just-abdullah-/",
  github: "https://github.com/just-abdullah-dev",
  ogImage: "/about.jpg",
  keywords: [
    "Abdullah Full Stack Engineer",
    "Just Abdullah",
    "Next.js developer",
    "React Native developer",
    "SaaS engineer Pakistan",
    "GateTak founder",
    "hire full stack developer",
  ],
  cvUrl:
    "https://drive.google.com/file/d/14QYcn8Hk1_TEQq0WXWLzWJVdIhEEVZGm/view?usp=sharing",
};

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
