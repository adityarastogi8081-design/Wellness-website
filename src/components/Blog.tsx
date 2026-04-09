import { motion } from "motion/react";
import { 
  Flower2, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Search 
} from "lucide-react";
import { useState } from "react";

const BlogHero = () => {
  return (
    <header className="mb-20 space-y-6 pt-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center space-x-2 bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
      >
        <Flower2 size={16} />
        <span className="font-label">Nurture Resources</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-headline text-5xl md:text-7xl font-extrabold text-on-background leading-[1.1] max-w-4xl tracking-tight"
      >
        Cultivate your digital <span className="text-primary italic">inner garden</span>.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-secondary text-xl max-w-2xl leading-relaxed"
      >
        Explore a curated collection of wisdom, scientific insights, and gentle practices designed to support your mental landscape and emotional resonance.
      </motion.p>
    </header>
  );
};

const CategoryFilter = () => {
  const categories = ["All Stories", "Mental Health", "Mindfulness", "Wellness Tips", "Nutrition", "Sleep"];
  const [active, setActive] = useState("All Stories");

  return (
    <section className="mb-12">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-400 ${
              active === cat 
                ? "bg-primary text-on-primary" 
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-8 group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] bg-surface-container-low mb-8">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Neurobiology of Stillness" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMQvJQXGAUaFmtPrtSJ_jEpsnZ52iqpTOgz05YVcW9TLx5Sq6etKmprE64zxogBZcfGq6wVUuF0vd9oDzN97a56sZX3Qpaoo7vhw2DZ4SKl-8kf1JZ5X40w_bEiPHyGd4hN_tRe8L26QryKgGvtEu3sAE_5oijG3Qdshcxd9frQmV-8FAHLh_10eEKvS5cfD5ioCt-WDOikmPCXglGmgoTK0puj-Xj3XYh69l959Eat4meB_1JloJFsnqcKK2-_FkHmv4O1v9iR50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="space-y-4 px-2">
          <div className="flex items-center space-x-4 text-sm font-label text-primary uppercase tracking-[0.2em]">
            <span>Mental Health</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span>12 Min Read</span>
          </div>
          <h2 className="font-headline text-4xl font-bold text-on-background leading-tight group-hover:text-primary transition-colors duration-400">
            The Neurobiology of Stillness: Why Our Brains Crave Quiet Moments
          </h2>
          <p className="text-secondary text-lg leading-relaxed line-clamp-2 max-w-3xl">
            In an era of constant notification and noise, silence is no longer a luxury—it's a biological necessity for cognitive restoration and emotional balance.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-4 flex flex-col justify-center space-y-12 bg-surface-container-low p-10 rounded-[2rem]"
      >
        <div className="space-y-4">
          <span className="font-label text-xs uppercase tracking-widest text-tertiary">Newsletter</span>
          <h3 className="font-headline text-2xl font-bold">Deepen your practice.</h3>
          <p className="text-on-surface-variant leading-relaxed">Weekly reflections on living with intention, delivered softly to your inbox.</p>
          <div className="flex flex-col space-y-3 pt-4">
            <div className="relative">
              <input 
                className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant transition-all outline-none" 
                placeholder="Email address" 
                type="email"
              />
            </div>
            <button className="bg-primary text-on-primary w-full py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const BlogGrid = () => {
  const posts = [
    {
      category: "Mindfulness",
      title: "5 Breath Exercises for Instant Grounding",
      excerpt: "Simple, discreet techniques you can practice anywhere to recalibrate your nervous system.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN7YULX2DyzcldnP9dKsUi0KEot38HMM2VfCB-4kpNUQGnQs_iUIu5dT7KCORfnJjnLe03xbZZHUy6byU6hM2RwQNIuHN9QyWJyjDKxkOzs5iHFx_-guTdyMpTGn1nFf2PgI-MrgCZLCg9KszSxD1m9zAx82kCaKsiraswpZOS8LWHWp7BcdMVjWVvZsUgvodP7zX3jDIokI3n4BssIOGHDZfogTVq9-4U6B2ivvB6p2W6Gz_x8l9cVuIbRnNaRclBW0sVq9Et53I"
    },
    {
      category: "Sleep",
      title: "The Ritual of the Evening: A Guide to Sleep Hygiene",
      excerpt: "How small shifts in your nighttime environment can lead to profound changes in restorative sleep.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT4rANWdJxcd7tqnjEqYUYeCv45sqsTjK2ZLsfKnawUBLrfLVvcVC0G72IGB615lxx4GkmfwFkA-XSBZCZZecCNvgAv2mXnrXzGa-efXDv5wsK8oDktIvjKcGnLU4ciDIr86esuk_zqNu-27e_3VZDg2o6ehNNMpB-tFg9laLbFocmszJzA-is30OeOFcoKMOVyd5y7-7t73KmGP3O35Mv1qhUMP8ULnTtA3H23Ehhz1pjTkROmFmpbOBiiNJdY0A-GaATQAwnmb8"
    },
    {
      category: "Wellness Tips",
      title: "Building Resilience through Movement",
      excerpt: "Understanding the relationship between physical stamina and emotional fortitude.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE2c0iaNTC_ZMBpmwylF7s0tbU-mG1N4kPbOl716vXlzBTDG6HXEsJQSDsCKzsTSoYgAAXcPgOjWgBCPDNeFmEViZV5uOfFqRHueau6kVlC_OByKz_s6Qsh57DR2BObYESvXrq-HSpRDDtaR-LFgL3iG8RjgxTZqN0eDtG97_10QiscIp2WrqiKGsbuZ3uNZV29DEGYGJZw59aeX6YYMUqGt0ucrrl3WJbxxrv-yLPxPp1WigG1GYNohyr1gjxHv8kf1LROF1LDKA"
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((post, idx) => (
        <motion.article 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group flex flex-col cursor-pointer"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-square mb-6 bg-surface-container">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              alt={post.title} 
              src={post.img}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs font-label uppercase tracking-widest text-secondary-dim">{post.category}</span>
            <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors duration-400">{post.title}</h3>
            <p className="text-on-surface-variant line-clamp-2">{post.excerpt}</p>
          </div>
        </motion.article>
      ))}

      {/* Large Card */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-[2.5rem] md:col-span-2 h-[450px] cursor-pointer"
      >
        <img 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          alt="Deep Ecology" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0DyJeYaIEOxWRY2z4WS4UDsxfXyytRV9-zGORvcynJ_kfHnlD5JG4fYpaP-CJR0mevhBpZ0IS2yJb3EtuivSciKwbx5vsXsvTPMMgHWrcw57JdMaLl0U5qujjVsNghJ90xmhopaeMZPHKj10tHiVZaGpzJZ4KWAp3VsqG9J5lm9f9_J6kivo1Vp0X9Oc9lqwVNs9gdM0ISSXuzcDhIQdqnMS4ps8d5uPksFOZWt-LkPjm8s0AmgmmZ64KnLCeIc3cvCS-3rYRJ2Y"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 w-full">
          <div className="flex items-center space-x-3 text-primary-container text-xs font-label uppercase tracking-widest mb-4">
            <Star size={14} fill="currentColor" />
            <span>Long Read</span>
          </div>
          <h2 className="font-headline text-3xl font-bold text-white mb-4 max-w-xl">Deep Ecology: Finding Yourself in the Rhythms of the Natural World</h2>
          <p className="text-white/80 max-w-lg mb-6">A philosophical exploration of how reconnecting with the earth's natural cycles can heal our modern sense of fragmentation.</p>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full font-medium hover:bg-white hover:text-on-surface transition-all duration-400">Read Article</button>
        </div>
      </motion.article>

      {/* Card 5 */}
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col cursor-pointer"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-square mb-6 bg-surface-container">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            alt="Foods that Feed the Soul" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuFswRQ8aCrT-K62Pzc1pd9IcGkBN7divFxq9Mc8mO02YF_OTzsQNzzyQ1miFbenV75bfb7mLs_kx8lh-7ZyAfLy1xNHJnXeZIcoTejoLfVVuH6YnCqGUIZAbSqgi5FVVXa8K4CL0IZkV3vtNXtlZ4PKt4peoEefM4tagbr211Jpfww-T8QtEvdaBOqaAE0OOh-UbVnRdFBL9djfWbjGK05ieUJypZ_0UQexOCO-7i9wVp_k5wmFy3BGvxpU-6sk8s3EfeHIFmkUE"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-3">
          <span className="text-xs font-label uppercase tracking-widest text-secondary-dim">Nutrition</span>
          <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors duration-400">Foods that Feed the Soul</h3>
          <p className="text-on-surface-variant line-clamp-2">Exploring the connection between gut health and serotonin production for a stable mood.</p>
        </div>
      </motion.article>
    </section>
  );
};

const Pagination = () => {
  return (
    <div className="mt-24 mb-12 flex justify-center items-center space-x-2">
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-400">
        <ChevronLeft size={20} />
      </button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold">1</button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container transition-all">2</button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container transition-all">3</button>
      <span className="px-2 text-outline-variant">...</span>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container transition-all">12</button>
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all duration-400">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-32">
      <BlogHero />
      <CategoryFilter />
      <FeaturedSection />
      <BlogGrid />
      <Pagination />
    </div>
  );
}
