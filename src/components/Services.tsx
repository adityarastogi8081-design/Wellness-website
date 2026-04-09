import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Flower2, 
  Brain, 
  Heart, 
  Leaf 
} from "lucide-react";

const ServicesHero = () => {
  return (
    <header className="mb-24 relative pt-20">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 -tracking-wider"
        >
          Gentle guidance for your <span className="text-primary italic">inner landscape</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-secondary leading-relaxed max-w-2xl font-light"
        >
          Our sanctuary offers a curated selection of holistic services designed to restore balance, foster resilience, and nurture your digital and physical well-being.
        </motion.p>
      </div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/30 rounded-full blur-[100px] -z-10"></div>
    </header>
  );
};

const ServicesGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
      {/* Yoga */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-7 group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5"
      >
        <div className="relative h-96 overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
            alt="Restorative Yoga" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX3OJcVS_WKBQsrdWzrfncFXRMyVY7LRGmzxdqlwnxwKpYmD24XlHhn4BPIh6p1deeqwzhCoBfFVnYcyoIsbEEFpK1tO00jF6il8CjaSOPWZ2sw69UTw4Dtf607gDKbe_ejdja7P5skq6Zo0LB6Hobuf1mhlcR9-a5FUVcnaR_iixJ8H8jRBOoLWjFU85yxhRy8yawuGUUAq4vnh3r2LTDISdNAbHIGVOI3u4chK0M5mDgsmEXM2QrkPxfrIlt9jdd2nghXnSHm-o"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-2 block">Movement</span>
            <h3 className="text-4xl font-headline font-bold">Restorative Yoga</h3>
          </div>
        </div>
        <div className="p-10">
          <p className="text-secondary text-lg mb-8 leading-relaxed">Experience a gentle flow that synchronizes breath with movement, helping you release tension stored deep within the muscle tissues and quiet the mind.</p>
          <button className="flex items-center gap-3 text-primary font-bold group/btn">
            Learn More 
            <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
          </button>
        </div>
      </motion.div>

      {/* Meditation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="md:col-span-5 group bg-tertiary-container rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5"
      >
        <div className="p-10 flex flex-col h-full">
          <Brain size={48} className="text-tertiary mb-6" />
          <h3 className="text-3xl font-headline font-bold text-on-tertiary-container mb-4">Mindfulness Meditation</h3>
          <p className="text-on-tertiary-container/80 text-lg mb-12 leading-relaxed">Guided sessions to help you cultivate a non-judgmental awareness of the present moment, reducing stress and increasing clarity.</p>
          <div className="mt-auto overflow-hidden rounded-xl h-48 mb-8">
            <img 
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
              alt="Mindfulness Meditation" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TwUe0VFqhIuN96f3nh_If9eT2e7XZz-Q-XRe8_oWPVlbJCfBaC2BDoiLbc2F23jG4T33hM3GjNaulb3oZyBYo5jA2dMiw-kfTjWkVzBAqeu9RPARyth8rFFFKmQZVKHRZCschJYpy-NXDmvL_tN2Q6ZkW1UlKlHb6dMEr6Cp0LNXNm9C5YL-9BMdlhd7GzH7qup9IVKH_s1gzZHcGJaZmpzruMC1fFMXFQRZvmrPSWDQmvRIqd4HMaZrKuimvS5J4KQIBpZao2A"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="flex items-center gap-3 text-tertiary font-bold group/btn">
            Learn More 
            <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
          </button>
        </div>
      </motion.div>

      {/* Counseling */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="md:col-span-5 group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5"
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            alt="Holistic Counseling" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsXvggPnboxUaS0MOIfCywjratXTJgEsLu55B019SPWQfnRiZnsMpKYEqPJwyhTUlyZT3QsqjP3gfTnmgL06nwhTRz1vIMpT3sfu18KNnIFc7uZemYt5yNiea3vSIoOaTk_9Zb6ZrK2I5ciBvXPrhOKCT2onj_uC5Fku1TPqD3OpNJM0KGOWcOEEXGlMyLCFwX1fxXD2MB8MZj7Ii7cd-DO8bl21l4JX-HPjDSRgHZajOGTS0XZYbBb3BQfHb8QxQOWd7_ZEwnTQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-10">
          <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">Holistic Counseling</h3>
          <p className="text-secondary text-lg mb-8 leading-relaxed">One-on-one sessions that integrate mental, emotional, and spiritual well-being to navigate life's transitions.</p>
          <button className="flex items-center gap-3 text-primary font-bold group/btn">
            Learn More 
            <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
          </button>
        </div>
      </motion.div>

      {/* Wellness Coaching */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="md:col-span-7 group bg-secondary-container rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-on-surface/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-headline font-bold text-on-secondary-container mb-4">Wellness Coaching</h3>
            <p className="text-on-secondary-container/80 text-lg mb-8 leading-relaxed">Personalized strategies for nutrition, sleep hygiene, and lifestyle habits that sustain long-term vitality.</p>
            <button className="flex items-center gap-3 text-on-secondary-fixed font-bold group/btn w-fit">
              Learn More 
              <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
            </button>
          </div>
          <div className="relative min-h-[300px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
              alt="Wellness Coaching" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuqlmZf9JbcPmtDAQlV583wlZ8n1KVHYDARhYh7nyBECHn32B2OMSZUstNhk2pxKwr337ziQWc3pxo_FkSkBQFGkVsKBf8gQXQKqhZRIJHpBVSmwHhvKt2AowYbZ0msZXYPwhQSJcyE422eMwg-f_FasI17zEgGcu7e9PVVx13bwpjFCwz10UIWpwsvSmQCMEXujxntyUCKlWajEs06Z4aVKwV1xDBV0nm67L2dHA2WfvXgIJw-JAOYmDM3MmDTerTMu8_Yb8ZX5Y"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Pricing = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "2 Weekly Yoga Classes",
        "Monthly Group Meditation",
        "Digital Resource Library"
      ],
      highlight: false
    },
    {
      name: "Growth",
      price: "129",
      features: [
        "Unlimited Classes",
        "1 Monthly Counseling Session",
        "Wellness Coaching Access",
        "Priority Booking"
      ],
      highlight: true
    },
    {
      name: "Holistic",
      price: "249",
      features: [
        "All Inclusive Access",
        "Weekly Counseling",
        "Personalized Meal Plans",
        "24/7 Concierge Support"
      ],
      highlight: false
    }
  ];

  return (
    <section className="mt-40">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-headline font-bold mb-4 tracking-tight">Simple Pricing</h2>
        <p className="text-secondary text-lg max-w-xl mx-auto">Choose the path that best supports your journey toward wholeness.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-10 rounded-xl flex flex-col border border-outline-variant/10 ${
              plan.highlight 
                ? "bg-primary-container scale-105 shadow-xl shadow-primary/10 relative" 
                : "bg-surface-container-low"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-on-primary-container" : ""}`}>{plan.name}</h4>
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-headline font-extrabold ${plan.highlight ? "text-on-primary-container" : ""}`}>${plan.price}</span>
                <span className={`${plan.highlight ? "text-on-primary-container/70" : "text-secondary"} text-sm`}>/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className={`flex items-center gap-3 ${plan.highlight ? "text-on-primary-container" : "text-secondary"}`}>
                  <CheckCircle2 size={20} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setCurrentPage("booking")}
              className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.highlight 
                  ? "bg-primary text-on-primary hover:opacity-90" 
                  : "bg-white text-on-surface hover:bg-surface-container-high"
              }`}
            >
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function Services({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-32">
      <ServicesHero />
      <ServicesGrid />
      <Pricing setCurrentPage={setCurrentPage} />
    </div>
  );
}
