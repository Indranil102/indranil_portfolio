// src/components/Contact.jsx
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const DUPLICATE_KEY = 'sent_emails';
const getSent = () => JSON.parse(localStorage.getItem(DUPLICATE_KEY) || '{}');
const markSent = email => {
  const sent = getSent();
  sent[email] = Date.now();
  localStorage.setItem(DUPLICATE_KEY, JSON.stringify(sent));
};
const isDuplicate = email => !!getSent()[email];

export default function Contact() {
  const form = useRef();
  const captchaRef = useRef();
  const [captcha, setCaptcha] = useState(null);

  const sendEmail = e => {
    e.preventDefault();
    const email = form.current.user_email.value;

    if (!captcha) return toast.error('Please complete the captcha.');
    if (isDuplicate(email)) return toast.error('Message already sent from this email.');

    toast.promise(
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY),
      {
        loading: 'Sending...',
        success: () => {
          markSent(email);
          form.current.reset();
          captchaRef.current.reset();
          setCaptcha(null);
          return 'Message sent!';
        },
        error: 'Failed to send. Try again.',
      }
    );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
          <input name="user_name" placeholder="Name" required className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent" />
          <input name="user_email" type="email" placeholder="Email" required className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent" />
          <textarea name="message" placeholder="Message" required rows="5" className="w-full p-3 rounded bg-neutral-800 outline-none focus:ring-2 ring-accent" />

          <ReCAPTCHA ref={captchaRef} sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptcha} className="mx-auto" />

          <button
            type="submit"
            disabled={!captcha}
            className="inline-block bg-accent text-black font-semibold px-6 py-2 rounded hover:bg-[#00ffc8] hover:text-black transition-colors disabled:opacity-50"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <a href="https://www.linkedin.com/in/indranil-samanta-26558a253/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaLinkedin /></a>
          <a href="https://github.com/Indranil102" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><FaGithub /></a>
        </div>

        <div className="text-center mt-6">
          <a href="https://drive.google.com/file/d/1azX1Zj3whIaZTPXu0wP6NOfLFQ9AU9T7/view?usp=drive_link" className="underline text-accent hover:text-accent2">
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
}