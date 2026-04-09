import { motion } from "motion/react";
import { 
  Flower2, 
  UserRound, 
  Users, 
  Leaf, 
  BadgeCheck 
} from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(79,100,91,0.08)_0%,rgba(251,249,245,0)_70%)]">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-widest mb-6"
          >
            OUR ESSENCE
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8"
          >
            Space to <span className="text-primary italic">breathe</span>,<br/>room to grow.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-secondary leading-relaxed max-w-2xl"
          >
            Nurture was born from a simple realization: healing is not a destination, but a rhythmic return to oneself. We craft digital and physical sanctuaries for the modern soul.
          </motion.p>
        </div>
      </div>
      <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-tertiary-container/30 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

const BrandStory = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-[16/10] rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                alt="Healing Space" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZzfAq005-QMMKK7FrkPMOOnQ7QK45rFOT6at5Dn9HSJs1Ic1x6jJg6Njs4vDIQ8oyIGT5wW1_khf3pgDl_PlmTGGjPhFlMZMTxZl9ZAPL5sy3h2hjWqyWfV5wRPfPzM49p5MLGWM6lhcLt6y53YAKl0Q4MEnrbmwnKHTG6_igFHk6rojr6qsBi4_r71wQzseoKyJJ7KsJp37srhpN_HRsvdgPZG2_X9ymEkMaNa0owzr4S3QxyGGdO0uKRcgcK50iuhnirTDmLDY"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="md:col-span-5">
            <h2 className="text-4xl font-headline font-bold mb-6 text-on-surface">The Path of Transformation</h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed">
              <p>
                We believe in the quiet power of intentionality. Our journey began in a small garden studio, where we explored how environment influences the nervous system.
              </p>
              <p>
                Today, we expand that vision into a holistic ecosystem. From mindful movement to digital detoxing, every touchpoint at Nurture is designed to lower cortisol and elevate consciousness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pillars = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-headline font-bold mb-4">The Pillars of Nurture</h2>
          <p className="text-secondary max-w-xl mx-auto">Our values aren't just words; they are the architecture of our community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white p-10 rounded-xl flex flex-col justify-between shadow-sm">
            <div>
              <Flower2 size={40} className="text-primary mb-6" />
              <h3 className="text-2xl font-headline font-bold mb-4">Holistic Health</h3>
              <p className="text-secondary leading-relaxed">We view the person as a whole—mental, physical, and emotional states are inextricably linked in a delicate dance of wellness.</p>
            </div>
            <div className="mt-8 flex gap-2">
              <div className="h-1 w-full bg-primary-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between">
            <UserRound size={40} className="mb-6" />
            <div>
              <h3 className="text-xl font-headline font-bold mb-2">Mindfulness</h3>
              <p className="text-on-primary/80 text-sm">Present-moment awareness as a tool for radical clarity and peace.</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-tertiary-container p-10 rounded-xl flex flex-col justify-between">
            <Users size={40} className="text-on-tertiary-container mb-6" />
            <div>
              <h3 className="text-xl font-headline font-bold mb-2 text-on-tertiary-container">Collective Care</h3>
              <p className="text-on-tertiary-container/80 text-sm">Healing happens best in connection with others.</p>
            </div>
          </div>

          <div className="md:col-span-1 bg-secondary-container p-10 rounded-xl">
            <Leaf size={40} className="text-on-secondary-container mb-6" />
            <h3 className="text-xl font-headline font-bold mb-2 text-on-secondary-container">Sustainability</h3>
            <p className="text-on-secondary-container/80 text-sm">Creating habits that last a lifetime, not just a season.</p>
          </div>

          <div className="md:col-span-3 bg-surface-container-highest p-10 rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-headline font-bold mb-4">Radical Transparency</h3>
              <p className="text-secondary leading-relaxed">No fluff, no pseudoscience. We ground our practices in ancient wisdom backed by modern physiological understanding.</p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <BadgeCheck size={180} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderMessage = () => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/2 min-h-[500px] relative">
            <img 
              alt="Founder Portrait" 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxE9TA9urM5UgzyRgZTMnn_aNvjWXf4kcPLzNujaLmsiANzfrpcGy-lG463BjMBcY9YbKKdCfAvDKtwZwcwj60usa_X8pJqAw3WU1tzdtSR_LqW9w8cmvVhlwYOxehg5SI1B7ipbAz8FD9W2TB57BSdMepRLouTMnIkn0h1rVY5GmUa4LsfmUj4f3xLT4Ywh5U__88-kLq9HeErmK0z7MyBXwJjos2XpXUV9gmqgfLlQwvA0Q15oA9GlazmOufails2Pfk6WKlUVA"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4">From the Founder</span>
            <h2 className="text-4xl font-headline font-bold mb-8 italic">"We are the architects of our own internal environment."</h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              My journey began with burnout. In the frantic pace of modern life, I lost my center. Nurture was created to be the compass I wish I had—a place where the rush stops and the recovery begins. We don't just teach wellness; we curate life-giving rituals.
            </p>
            <div>
              <p className="font-headline font-bold text-xl text-on-surface">Elena Vance</p>
              <p className="text-sm text-secondary">Founder & Lead Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <Pillars />
      <FounderMessage />
    </>
  );
}
