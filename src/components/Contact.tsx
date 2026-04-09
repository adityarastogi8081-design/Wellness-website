import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Instagram,
  Linkedin,
  Music,
  LocateFixed
} from "lucide-react";
import { useState, FormEvent } from "react";

const ContactHero = () => {
  return (
    <header className="mb-20 max-w-3xl pt-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-6 font-headline"
      >
        Reach out to us in <span className="text-primary italic font-medium">stillness.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-secondary leading-relaxed"
      >
        Whether you have a question about our services or simply want to share your journey, we are here to listen and guide you back to center.
      </motion.p>
    </header>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you for reaching out. We'll get back to you soon!");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className="lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-10 md:p-14 shadow-sm shadow-on-surface/5">
      <h2 className="text-2xl font-bold mb-8 text-on-surface font-headline">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-dim px-1">Name</label>
            <input 
              required
              className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-400 text-on-surface placeholder:text-outline outline-none" 
              placeholder="Your name" 
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-dim px-1">Email</label>
            <input 
              required
              className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-400 text-on-surface placeholder:text-outline outline-none" 
              placeholder="hello@nurture.com" 
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-secondary-dim px-1">Message</label>
          <textarea 
            required
            className="w-full bg-surface-container-high border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-400 text-on-surface placeholder:text-outline resize-none outline-none" 
            placeholder="How can we help you breathe easier today?" 
            rows={6}
            value={formState.message}
            onChange={(e) => setFormState({...formState, message: e.target.value})}
          ></textarea>
        </div>
        <div className="pt-4">
          <button 
            className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl font-semibold shadow-xl shadow-primary/10 hover:bg-primary-dim transition-all duration-500 flex items-center justify-center gap-2 group" 
            type="submit"
          >
            Send Message
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </form>
    </section>
  );
};

const Sidebar = () => {
  return (
    <aside className="lg:col-span-5 space-y-12">
      <div className="space-y-6">
        <div className="p-8 bg-surface-container-low rounded-[2rem] space-y-4">
          <h3 className="text-xl font-bold text-on-surface font-headline">Our Studio</h3>
          <p className="text-secondary leading-relaxed">
            128 Serenity Lane, Suite 4<br/>
            Oak Valley, California 90210
          </p>
          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 text-secondary">
              <Mail className="text-primary" size={20} />
              <span>hello@thesanctuary.com</span>
            </div>
            <div className="flex items-center gap-3 text-secondary">
              <Phone className="text-primary" size={20} />
              <span>+1 (555) 012-3456</span>
            </div>
          </div>
        </div>

        <div className="relative h-64 w-full rounded-[2rem] overflow-hidden bg-surface-container shadow-inner group">
          <img 
            className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
            alt="Map location" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdFIoBpPyqSxthXrsEeRq12IV2ZR4UuD9aqR7bw_pxZAI3oqCS-M0p1wY17vxLiXWGe560EKBO-b9-ajwSrezMA853ZMxmiUHQGhdfxTotLubsL8Q-8bZTfDhJKtMUIF7uQpg5b5b3xdW5aaY6kENcc_PhKpA1kvmAN9zo2t09UTjAZftKEbvEy7gWIYj5abF2QeEC7-5OYMcXnEL2aQ5M8bUR6SYq21ppMZQ0irjTQw38JNJpPgwrcKz0DLTZsSBiDywDncRUbX4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <LocateFixed className="text-primary" size={18} />
              <span className="text-sm font-bold text-on-surface">Find us in the Valley</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-4">
        <h3 className="text-lg font-bold text-on-surface font-headline">Join the Community</h3>
        <div className="flex flex-wrap gap-4">
          <a className="group flex items-center gap-3 bg-white px-5 py-3 rounded-xl hover:bg-primary transition-all duration-500 shadow-sm" href="#">
            <Instagram size={18} className="text-secondary group-hover:text-on-primary transition-colors" />
            <span className="text-sm font-medium text-secondary group-hover:text-on-primary transition-colors">Instagram</span>
          </a>
          <a className="group flex items-center gap-3 bg-white px-5 py-3 rounded-xl hover:bg-primary transition-all duration-500 shadow-sm" href="#">
            <Linkedin size={18} className="text-secondary group-hover:text-on-primary transition-colors" />
            <span className="text-sm font-medium text-secondary group-hover:text-on-primary transition-colors">LinkedIn</span>
          </a>
          <a className="group flex items-center gap-3 bg-white px-5 py-3 rounded-xl hover:bg-primary transition-all duration-500 shadow-sm" href="#">
            <Music size={18} className="text-secondary group-hover:text-on-primary transition-colors" />
            <span className="text-sm font-medium text-secondary group-hover:text-on-primary transition-colors">Spotify</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

const DecorativeImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 rounded-[3rem] overflow-hidden relative h-[400px]"
    >
      <img 
        className="w-full h-full object-cover" 
        alt="Serene morning light" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzPF-FoiMafXFPnQqM5Vh_2zTV6tZy4QyZhd3bkyXBDOKJvlGCIFxuai-xp241PrxRb4mDLYw8M9FHUut3cMk5iWmbx3OJV3voJUmYXatsNBzQKI-jNHuM9SIZJyYThrj9AL_tR62ALcSRFi0B2wql8ASS-xeq88K94fd8GQIzztlrRsLZTpNudgOAUrAZzof4a-yRQQhCh94hhr_QemmrxZ3X4nled5YwDl35lWWRHWx-0vTFZgQIS39r2TuWVzLt-FyhcBIg5Ck"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
      <div className="absolute bottom-12 left-12 max-w-md">
        <p className="text-2xl font-headline font-light text-white leading-snug drop-shadow-sm italic">
          "Peace is not the absence of noise, but the presence of stillness within the center."
        </p>
      </div>
    </motion.div>
  );
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-24">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <ContactForm />
        <Sidebar />
      </div>
      <DecorativeImage />
    </div>
  );
}
