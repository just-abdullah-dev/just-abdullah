"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Btn from "../utils/Btn";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendMsg = async (e) => {
    e.preventDefault();
    const emailPattern = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name) return toast.error("Please enter name");
    if (!emailPattern.test(email)) return toast.error("Please enter valid email");
    if (!subject) return toast.error("Please type a subject");
    if (!message) return toast.error("Please type a message");

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, subject }),
    };

    await fetch(`/api/sendMail/sendMailToDev`, options)
      .then((data) => data.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        } else {
          toast.error(data?.message);
        }
      });
  };

  return (
    <section id="contact" className="premium-section">
      <div className="section-heading-grid">
        <div>
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Have a serious build in mind?</h2>
        </div>
        <p className="section-copy">
          Send a message for SaaS platforms, dashboards, AI API integrations,
          portfolio systems, or startup product builds.
        </p>
      </div>

      <form onSubmit={sendMsg} className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <input className="inputTag" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
          <input className="inputTag" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
        </div>
        <input className="inputTag" name="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Project Subject" />
        <textarea className="inputTag min-h-36" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me what you want to build..." />
        <button className="w-full" type="submit">
          <Btn className="w-full justify-center">Send Message</Btn>
        </button>
      </form>
    </section>
  );
}

export default Contact;
