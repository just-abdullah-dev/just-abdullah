import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <div className="">
      <Image
        className="mx-auto w-full md:w-[70%] lg:w-[45%] xl:w-[35%] aspect-auto scale-x-[-1 rounded-2xl"
        src={"/DP_New2_Square.jpg"}
        alt="Abdullah Profile Picture"
        width={800}
        height={800}
        loading = 'eager'
        priority
      />
      {/* about content  */}
      <div className=" p-4 grid gap-8 text-light lg:px-8 xl:px-16">
        <div className=" grid gap-4">
          <h1 className=" text-2xl font-bold text-white">
            Emerging Full Stack Web Developer
          </h1>
          <p className=" ">
            I am <span className=" text-primary">Abdullah</span>, an
            enthusiastic full-stack web developer with expertise in Next.js,
            React.js, Node.js, and MongoDB. With 1+ year of hands-on experience
            in the web development, I specialize in crafting exceptional user
            experiences using cutting-edge technologies.
          </p>
        </div>
        {/* key points  */}
        <div>
          <h2 className=" font-bold text-xl text-white">
            Here&#39;s what sets me apart
          </h2>
          <ul className=" list-inside list-disc pl-4">
            <li>
              Proficiency in React.js, Next.js, MongoDB, and Node.js, ensuring
              robust and scalable web applications.
            </li>
            <li>
              Dedication to delivering high-quality solutions that meet your
              needs.
            </li>
            <li>
              Strong problem-solving skills and attention to detail, resulting
              in clean and efficient code.
            </li>
            <li>
              Continuous learning to stay updated with the latest trends and
              best practices in web development.
            </li>
          </ul>
        </div>
        {/* tech  */}
        <div>
          <h2 className=" font-bold text-xl text-white">
            Technologies I work with:
          </h2>
          <ul className=" list-inside list-disc pl-4">
            <li>
              <b>Frontend: </b>React.js, Next.js, HTML, CSS, Tailwind,
              JavaScript
            </li>
            <li>
              <b>Backend:</b> Node.js, MongoDB, Next.js
            </li>
            <li>
              <b>Tools:</b> Git, VS Code
            </li>
          </ul>
        </div>
        {/* call for action  */}
        <div className=" text-white font-bold text-3xl py-6 flex items-end md:items-center gap-4 hover:gap-10 duration-300">
          Let&#39;s build something amazing together <Link href={"/#contact"}>
            <MoveRight size={40} className=" hover:text-primary" /></Link>
        </div>
      </div>
    </div>
  );
}
