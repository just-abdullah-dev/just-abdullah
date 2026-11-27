"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Btn from "../utils/Btn";
import { SITE } from "@/lib/site";

const fallbackMessage = `Failed to submit form. Kindly mail on "${SITE.email}".`;

export default function Contact({ compact = false }) {
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
    <section id="contact" className={compact ? "py-16 md:py-20" : "section-block"}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Have a serious build in mind?</h2>
          <p className="section-copy mt-4">
            Tell me about the product, timeline, and constraints. I reply personally — usually within
            one business day.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-ink-muted">
            <Link href={`mailto:${SITE.email}`} className="font-medium text-signal hover:underline">
              {SITE.email}
            </Link>
            <Link href={`tel:${SITE.phone}`} className="hover:text-ink">
              {SITE.phoneDisplay}
            </Link>
            <p>{SITE.location}</p>
          </div>
        </div>

        <form
          onSubmit={sendMsg}
          className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-5 md:p-8"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="labelTag" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                className="inputTag"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="labelTag" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className="inputTag"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="labelTag" htmlFor="contact-subject">
              Subject
            </label>
            <input
              id="contact-subject"
              className="inputTag"
              name="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Project subject"
              required
            />
          </div>
          <div>
            <label className="labelTag" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className="inputTag min-h-36"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you building?"
              required
            />
          </div>
          <button
            className="w-full disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            <Btn className="w-full justify-center">
              {isSubmitting ? "Sending..." : "Send message"}
            </Btn>
          </button>
        </form>
      </div>
    </section>
  );
}
