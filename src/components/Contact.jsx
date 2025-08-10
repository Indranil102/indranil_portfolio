import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed, please try again.'));
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
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent"
        />
        <input
          name="email"
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
          className="inline-block bg-accent text-black font-semibold px-6 py-2 rounded
             hover:bg-[#00ffc8] hover:text-black transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-6 mt-8 text-3xl">
        <a
          href="https://linkedin.com/in/indranil19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/indranil19"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
        >
          <FaGithub />
        </a>
      </div>
      <div className="text-center mt-6">
        <a
          href="/resume.pdf"
          download
          className="inline-block underline text-accent hover:text-accent2"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}