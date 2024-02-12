import Socials from "@/components/utils/Socials";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Just Abdullah - Full Stack Developer",
  keywords: `justabdullahdev JUSTABDULLAHDEV just abdullah just-abdullah abdullah developer abdullah pafiast skill student b22f1020se166 just abdullah dev abdullah web developer abdullah full stack web developer Full-stack development web developer web development web app developer fullstack web development Next.js React.js MongoDB Node.js nodejs node js react js reactjs next js nextjs Web development Frontend development frontend engineer backend engineer Backend development JavaScript js HTML5 HTML CSS Responsive design User interface design User experience design Web application development Mobile-friendly design restfull api development API integration Git version control Agile methodology Database management RESTful APIs Single-page applications (SPAs) Cross-platform development Progressive Web Apps (PWAs) Server-side rendering (SSR) Client-side rendering (CSR) Microservices architecture Scalable architecture Test-driven development (TDD) Continuous integration/continuous deployment (CI/CD) Performance optimization Security best practices DevOps practices Cloud services (AWS Azure) Web application security Express js MERN stack MongoDB Express.js React.js Node.js`,
  description:
    "Welcome to Just Abdullah's portfolio! As a Full Stack Developer proficient in Next.js, React.js, MongoDB, and Node.js, I craft innovative digital solutions tailored to your needs. Explore my projects and expertise to elevate your online presence today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="roboto-regular bg-dark text-white relative">
        {children}
        <Toaster />
        <div className=" fixed bg-dark p-3 top-56 right-0 w-fit z-50">
          <Socials css={"grid gap-4"} />
        </div>
      </body>
    </html>
  );
}
