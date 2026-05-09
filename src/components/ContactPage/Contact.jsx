"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Btn from "../utils/Btn";

const fallbackMessage = 'Failed to submit form. Kindly mail on "just.abdullah.dev@gmail.com".';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMsg = async (e) => {
    e.preventDefault();
    const emailPattern = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!name.trim()) return toast.error("Please enter name");
    if (!emailPattern.test(email.trim())) return toast.error("Please enter valid email");
    if (!subject.trim()) return toast.error("Please type a subject");
    if (!message.trim()) return toast.error("Please type a message");
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendMail/sendMailToDev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: subject.trim(),
        }),
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || fallbackMessage);
      }

      toast.success(data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      toast.error(error?.message || fallbackMessage);
    } finally {
      setIsSubmitting(false);
    }
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
        <button className="w-full disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isSubmitting}>
          <Btn className="w-full justify-center">{isSubmitting ? "Sending..." : "Send Message"}</Btn>
        </button>
      </form>
    </section>
  );
}

export default Contact;
