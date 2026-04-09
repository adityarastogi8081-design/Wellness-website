import { motion } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Flower2, 
  Brain, 
  Scale, 
  Wind, 
  Quote
} from "lucide-react";

const Hero = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Peaceful nature" 
          className="w-full h-full object-cover brightness-95" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgdVh_35pnJUKdC8sZNc7HBjfhrzwX79RCsrf9hAy4wxH0HwxEI6m28SXg_LiZp71ti8IkYccVi5FA9a5Qi6jvSIgja92_aVuKhMzJ3DoNCuPcdNYDuHJVctWwM7djyw0DboevYOu42A3pQcdvzalvJTKZa6L1sxcAvm2qQm56h4kfidJswn_EUXTH6eSlr_8du5d88xnbTKm8RSso-L6jqCxLbADMsvCsXBg6aUmTu_IvHS6py8fu9nsRmmJqypzGQoSci5-SOn4"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center"
      >
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/80 text-on-primary-container text-sm font-medium tracking-wide">
          Welcome to Your Sanctuary
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight leading-[1.1] font-headline">
          Nurture Your Mind, <br/>Body & Soul
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          A holistic haven designed to restore your inner balance through curated wellness experiences and ancient healing wisdom.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setCurrentPage("services")}
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-xl text-lg font-semibold hover:translate-y-[-2px] transition-all duration-500 shadow-lg shadow-primary/10"
          >
            Explore Services
          </button>
          <button 
            onClick={() => setCurrentPage("booking")}
            className="w-full sm:w-auto bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl text-lg font-semibold hover:bg-surface-container-highest transition-all duration-500"
          >
            Book Session
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Restorative Yoga",
      desc: "Gentle movement for fluid living.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaIiIkv4U3MTdE9dhKaSiY_QOK6iU-cuXfqJRTPrzxiCto3pXRQ6yrkA2hYfBMiwjGWoDohkXljPCmbYO5Fgzc-meHyxHED1tOpk-8ldDLaJXhthzWCblMRn6BIQE7C09UOdsZgA-MhHQpjTqCBf9HAKdR4FhP3QvlbQJCviGrJnNI6WbzZtimn2yVzXnpZysvHf8NXdpanBzf6ao9bt8eETt2OF1h8947hdkvclb6F9dpaeuVA87x1ZSeUVChsxz7IYZK2gFS4mk"
    },
    {
      title: "Deep Meditation",
      desc: "Guided journeys to inner silence.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCO2yL8gQxhTxv3fuRNIn1U-XR3KaRwDUgIjqml8h6yyoIGDr95sbxyby5PBVZl_-R6DIIvs526AmQRfNaJDM_BtoD_0YIA1XiD0Bcq4mTdDcxZU0ugLlFyxvQW6DR2Xb-3vJdk2Ite0ASsy9cAioJvIeevJzndPUtZENVyzFh9iUhsOcEkmIsbKIDZJbd_JAhicm9s3BDByqwrXJmhP4S9pVJ7eUftxd9hKejBZgYNkUyg0Ib0XHDlXfupo-KefRqQKA673kL4V4"
    },
    {
      title: "Holistic Therapy",
      desc: "Compassionate support for the soul.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa3FzA8LGKe3-VjUm3WLjW9s8v0LO4MUhWP5zptykzqb28Go1dCUh-H4RGwMuUpVTCHeLy-mwQFl4OJPLRWHCAQsWBxYa9mh8X6Nz-juHp-bKlfhrWdMRHU126kezKp1ePYh-wIwU4i051I-oYp3wUClVxhnG0w2mYMGJ6ptEMcDFkXa7lrHEYwMXBR4BmHppRtQlL2GeTyVp2XPEhjlNrLeLRXZ0iz2PGYrYP9ENK_jPTP-th_vg5ftgrxZUDFBhRZFbX5nrr6Ck"
    }
  ];

  return (
    <section className="py-24 px-8 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-on-surface mb-4 font-headline">The Healing Arts</h2>
            <p className="text-secondary">Discover our core pillars of restorative practice, each tailored to your unique journey toward wholeness.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-3 rounded-full bg-surface-container-high text-on-surface hover:bg-primary-container transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="p-3 rounded-full bg-surface-container-high text-on-surface hover:bg-primary-container transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="min-w-[300px] md:min-w-[400px] snap-center group"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={service.img} 
                  alt={service.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white mb-2 font-headline">{service.title}</h3>
                  <p className="text-white/80">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-4 font-headline">Benefits of Stillness</h2>
          <p className="text-secondary max-w-lg mx-auto">Transform your daily rhythm with focused wellness practices that yield lasting results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 rounded-xl bg-primary-container p-10 flex flex-col justify-end group overflow-hidden relative"
          >
            <div className="absolute top-10 right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <Flower2 size={120} className="text-on-primary-container" />
            </div>
            <h3 className="text-3xl font-bold text-on-primary-container mb-2 font-headline">Stress Relief</h3>
            <p className="text-on-primary-container/80 max-w-md leading-relaxed">Lower cortisol levels and find your center in a chaotic world through our breathing techniques.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 rounded-xl bg-tertiary-container p-10 flex flex-col justify-end group relative overflow-hidden"
          >
            <div className="absolute top-10 right-10 opacity-20 group-hover:rotate-12 transition-transform duration-700">
              <Brain size={80} className="text-on-tertiary-container" />
            </div>
            <h3 className="text-2xl font-bold text-on-tertiary-container mb-2 font-headline">Mental Clarity</h3>
            <p className="text-on-tertiary-container/80 leading-relaxed">Sharpen your focus and dissolve brain fog with mindful awareness.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 rounded-xl bg-secondary-container p-10 flex flex-col justify-end group relative overflow-hidden"
          >
            <div className="absolute top-10 right-10 opacity-20 group-hover:scale-95 transition-transform duration-700">
              <Scale size={80} className="text-on-secondary-container" />
            </div>
            <h3 className="text-2xl font-bold text-on-secondary-container mb-2 font-headline">Perfect Balance</h3>
            <p className="text-on-secondary-container/80 leading-relaxed">Align your physical and emotional states for true equilibrium.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 rounded-xl bg-surface-container-highest p-10 flex flex-col justify-end group relative overflow-hidden"
          >
            <div className="absolute top-10 right-10 opacity-20 group-hover:translate-x-2 transition-transform duration-700">
              <Wind size={120} className="text-on-surface" />
            </div>
            <h3 className="text-3xl font-bold text-on-surface mb-2 font-headline">Holistic Growth</h3>
            <p className="text-on-surface-variant max-w-md leading-relaxed">Nurture every aspect of your being in a space designed for complete evolution.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-24 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Quote size={48} className="text-primary mx-auto mb-8 opacity-50" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl md:text-3xl italic font-light text-on-surface mb-10 leading-relaxed">
            "The Digital Sanctuary has completely transformed my approach to daily stress. I feel more grounded, focused, and at peace than I have in years."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                alt="Client" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOGBSqc77AO9SSfMCQ6ZrjBf2Fzo0ZDX1FatCespUe5xo4wev2teoVdzjK4SehgJ-OH1SX7Fq9TEKGf0_xcx4XjmDt80sUUVi2cn8A_BeH7dP_2w6eQb1gR0_j6mjHjOIyFQ-EVi9JOf9Q1X6mQ1gWf_63qEP2t-BSza4uuvfLDenArSbZBGOujxiLbArJvXwVMxOW1ro9MsPmV-g5hEKIW_j6l7I3W6O3rSKC5UI28Mq1LPYLuTDw1fu1iJdh3r1xCMc0cM5FvmQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-on-surface">Elena Rodriguez</p>
              <p className="text-sm text-secondary">Wellness Retreat Guest</p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
          <div className="w-2 h-2 rounded-full bg-outline-variant/30"></div>
        </div>
      </div>
    </section>
  );
};

export default function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <Services />
      <Benefits />
      <Testimonial />
    </>
  );
}
