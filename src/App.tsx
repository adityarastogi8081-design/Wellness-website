/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  return (
    <nav className="sticky top-0 w-full z-50 glass-nav shadow-sm shadow-emerald-900/5 transition-all duration-500">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <button 
          onClick={() => setCurrentPage("home")}
          className="text-2xl font-bold text-emerald-900 font-headline tracking-tight"
        >
          The Sanctuary
        </button>
        <div className="hidden md:flex items-center gap-8 font-label">
          <button 
            onClick={() => setCurrentPage("home")}
            className={`${currentPage === "home" ? "text-emerald-700 border-b-2 border-emerald-700 font-medium" : "text-stone-600 hover:text-emerald-900"} pb-1 transition-all duration-500`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage("about")}
            className={`${currentPage === "about" ? "text-emerald-700 border-b-2 border-emerald-700 font-medium" : "text-stone-600 hover:text-emerald-900"} pb-1 transition-all duration-500`}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage("services")}
            className={`${currentPage === "services" ? "text-emerald-700 border-b-2 border-emerald-700 font-medium" : "text-stone-600 hover:text-emerald-900"} pb-1 transition-all duration-500`}
          >
            Services
          </button>
          <button 
            onClick={() => setCurrentPage("blog")}
            className={`${currentPage === "blog" ? "text-emerald-700 border-b-2 border-emerald-700 font-medium" : "text-stone-600 hover:text-emerald-900"} pb-1 transition-all duration-500`}
          >
            Blog
          </button>
          <button 
            onClick={() => setCurrentPage("contact")}
            className={`${currentPage === "contact" ? "text-emerald-700 border-b-2 border-emerald-700 font-medium" : "text-stone-600 hover:text-emerald-900"} pb-1 transition-all duration-500`}
          >
            Contact
          </button>
        </div>
        <button 
          onClick={() => setCurrentPage("booking")}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-medium hover:opacity-90 transition-all duration-300 shadow-sm"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-5xl mx-auto bg-tertiary-fixed rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-on-tertiary-fixed mb-4 font-headline">Begin Your Journey</h2>
          <p className="text-on-tertiary-fixed-variant max-w-lg mx-auto mb-10">Receive weekly mindfulness tips, guided meditations, and exclusive workshop invites directly to your sanctuary.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 px-6 py-4 rounded-xl bg-white border-none focus:ring-2 focus:ring-primary/20 transition-all text-on-surface outline-none" 
              placeholder="Your email address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </form>
          <p className="mt-6 text-xs text-on-tertiary-fixed-variant/60">We respect your peace. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-stone-100 font-body">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-emerald-900 font-headline mb-6">The Sanctuary</div>
          <p className="text-stone-500 text-sm leading-relaxed">Cultivating peace and restoration in the heart of the digital age. Your journey to wellness starts here.</p>
        </div>
        <div>
          <h4 className="font-bold text-emerald-800 mb-6 uppercase text-xs tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all flex items-center gap-2" href="#"><Facebook size={16}/> Facebook</a></li>
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all flex items-center gap-2" href="#"><Instagram size={16}/> Instagram</a></li>
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all flex items-center gap-2" href="#"><Linkedin size={16}/> LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-emerald-800 mb-6 uppercase text-xs tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm text-stone-500">
            <li><button onClick={() => setCurrentPage("about")} className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all text-left">About Our Story</button></li>
            <li><button onClick={() => setCurrentPage("services")} className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all text-left">Services</button></li>
            <li><button onClick={() => setCurrentPage("blog")} className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all text-left">Blog</button></li>
            <li><button onClick={() => setCurrentPage("contact")} className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all text-left">Contact</button></li>
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all" href="#">Newsletter</a></li>
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all" href="#">Sitemap</a></li>
            <li><a className="hover:text-emerald-700 underline-offset-4 hover:underline transition-all" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-emerald-800 mb-6 uppercase text-xs tracking-widest">Address</h4>
          <p className="text-sm text-stone-500 leading-relaxed">
            124 Serenity Lane<br/>
            Quiet Valley, CA 90210<br/>
            hello@thesanctuary.com
          </p>
        </div>
      </div>
      <div className="border-t border-stone-200/50 py-8 text-center text-stone-400 text-xs">
        © 2024 The Digital Sanctuary. All rights reserved.
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />;
      case "about":
        return <About />;
      case "services":
        return <Services setCurrentPage={handlePageChange} />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "booking":
        return <Booking />;
      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      <main>
        {renderPage()}
        <Newsletter />
      </main>
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}
