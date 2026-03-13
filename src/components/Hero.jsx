import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury custom home by 1640 Management"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-32 right-8 lg:right-16 w-32 h-32 border border-gold/30 hidden md:block" />
      <div className="absolute bottom-16 left-8 lg:left-16 w-20 h-20 border border-gold/20 hidden md:block" />

      {/* Content */}
      <div className="relative container-custom text-center lg:text-left max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <span className="section-subtitle text-gold">
            Premium Construction &amp; Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-shadow"
        >
          Luxury Custom Homes
          <span className="block italic text-gold">Built with Precision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          We merge lifestyle, design, and architecture to create meaningful
          living spaces — where vision becomes structure and structure becomes home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <Link
            to="projects"
            smooth
            duration={700}
            offset={-80}
            className="btn-primary cursor-pointer group"
          >
            View Projects
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="contact"
            smooth
            duration={700}
            offset={-80}
            className="btn-outline cursor-pointer"
          >
            Request Consultation
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-lg border-t border-white/20 pt-8"
        >
          {[
            { value: '120+', label: 'Homes Built' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-heading text-gold text-3xl font-bold">{stat.value}</p>
              <p className="font-body text-white/60 text-xs tracking-wider uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
