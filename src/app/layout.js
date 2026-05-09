import Socials from "@/components/utils/Socials";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata = {
  title: "Abdullah - Full Stack Engineer",
  keywords: `justabdullahdev JUSTABDULLAHDEV just abdullah just-abdullah abdullah developer abdullah pafiast skill student b22f1020se166 just abdullah dev abdullah web developer abdullah full stack web developer Full-stack development web developer web development web app developer fullstack web development Next.js React.js MongoDB Node.js nodejs node js react js reactjs next js nextjs Web development Frontend development frontend engineer backend engineer Backend development JavaScript js HTML5 HTML CSS Responsive design User interface design User experience design Web application development Mobile-friendly design restfull api development API integration Git version control Agile methodology Database management RESTful APIs Single-page applications (SPAs) Cross-platform development Progressive Web Apps (PWAs) Server-side rendering (SSR) Client-side rendering (CSR) Microservices architecture Scalable architecture Test-driven development (TDD) Continuous integration/continuous deployment (CI/CD) Performance optimization Security best practices DevOps practices Cloud services (AWS Azure) Web application security Express js MERN stack MongoDB Express.js React.js Node.js full-stack software engineer pafiast paf-iast pakistan lahore developer best developer best software engineer pak-austria nust lums uet student itstudent just_abdullah_._ justxtech pak-austria fachhochschule python fastapi abdullah developer mysql postgresql postgres sql nosql vercel deployment  database design complex ui designer complex ui developer upwork fiverr freelance freelancer project first approach startup innovation web app focused dashboard ai builder`,
  description:
    "Welcome! A Full Stack Engineer proficient in Next.js, React.js, MongoDB, Node.js, MySQL, PostgreSQL, FastAPI. I craft innovative digital solutions tailored to your needs. Explore my projects and expertise to elevate your online presence today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white relative antialiased">
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
        <div className=" fixed right-0 top-56 z-50 hidden w-fit rounded-l-2xl border border-white/10 bg-black/70 p-3 backdrop-blur md:block ">
          <Socials css={"grid gap-4"} />
        </div>
      </body>
      <GoogleAnalytics gaId="G-P0R1X8KP4S" />
    </html>
  );
}
