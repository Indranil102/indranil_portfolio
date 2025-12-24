// src/components/Contact.jsx
import { useRef, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// EmailJS credentials from environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [ready, setReady] = useState(false);

  // Initialize EmailJS once
  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("❌ Missing EmailJS environment variables");
    } else {
      emailjs.init(PUBLIC_KEY);
      console.log("✅ EmailJS initialized with key:", PUBLIC_KEY);
      setReady(true);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!ready) {
      toast.error("Email service is not ready yet. Please try again in a moment.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(() => toast.success('Message sent!'))
      .catch((err) => {
        console.error("Email send error:", err);
        toast.error('Failed, please try again.');
      });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Contact
      </motion.h2>

      {/* Contact form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          name="user_name"
          placeholder="Name"
          required
          className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent"
        />
        <input
          name="user_email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows="5"
          className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent"
        />

        <button
          type="submit"
          disabled={!ready}
          className={`inline-block bg-accent text-black font-semibold px-6 py-2 rounded transition-colors duration-300 
            ${!ready ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00ffc8] hover:text-black'}`}
        >
          {ready ? 'Send Message' : 'Loading...'}
        </button>
      </form>

      <Toaster />
      
      {/* Social icons */}
      <div className="flex justify-center gap-6 mt-8 text-3xl">
        <a
          href="https://www.linkedin.com/in/indranil-samanta-26558a253/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Indranil102"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Resume */}
      <div className="text-center mt-6">
        <a
          href="https://drive.google.com/file/d/1NJrUhFONM-RbNE7SGw5PapnKioABuGlQ/view?usp=sharing"
          className="inline-block underline text-accent hover:text-accent2"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
