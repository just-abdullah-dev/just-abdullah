"use client";
import React, { useEffect, useState } from "react";
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

    if (!name) {
      // toast error
      toast.error("Please enter name");
      return;
    } else if (!emailPattern.test(email)) {
      //toast error
      toast.error("Please enter valid email");
      return;
    } else if (!subject) {
      // toast err
      toast.error("Please type a subject");
      return;
    } else if (!message) {
      // toast err
      toast.error("Please type a message");
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    <div
      id="contact"
      className=" md:px-12 lg:px-32 xl:px-56 grid gap-8 md:p-4 mt-6 md:mt-0"
    >
      {/* title  */}
      <div className=" md:px-24 grid gap-2">
        <h1 className=" text-primary font-bold text-4xl lg:text-5xl">
          Contact.
        </h1>
        <p className=" text-light">
          Seamless <span className=" text-primary">communication</span> starts
          here.
        </p>
      </div>

      {/* form  */}
      <form
        onSubmit={(e) => {
          sendMsg(e);
        }}
        className=" md:px-24 grid gap-6"
      >
        <input
          className=" inputTag w-full"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          className=" inputTag w-full"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <input
          // disabled={type !== undefined}
          className=" inputTag w-full"
          name="subject"
          type="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Your Subject"
        />
        <textarea
          className=" inputTag w-full"
          name="message"
          typeof="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message goes here..."
        />
        <button className=" w-full" type="submit">
          <Btn className="w-full">Send</Btn>
        </button>
      </form>
    </div>
  );
}

export default Contact;
