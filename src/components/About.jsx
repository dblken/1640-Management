import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-scroll';
import aboutImg from '../assets/about.jpg';

const highlights = [
  'Award-winning design team',
  'Bespoke craftsmanship on every project',
  'Transparent build process',
  'End-to-end project management',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 bg-cream">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={aboutImg}
                alt="Modern luxury home by 1640 Management"
                className="w-full h-[600px] object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/40 -z-10" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-charcoal p-6 shadow-2xl">
              <p className="font-heading text-gold text-4xl font-bold">15+</p>
              <p className="font-body text-white/80 text-sm tracking-wider uppercase mt-1">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-8 lg:pt-0"
          >
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title mb-6">
              About{' '}
              <span className="italic text-gold">1640 Management</span>
            </h2>
            <div className="gold-line mb-8" />
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              We understand how to merge lifestyle, design, and architecture to
              create a meaningful and functional relationship between you and
              your design team. Our philosophy is simple: every home we build
              should be a masterpiece.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-10">
              Founded on the principles of precision, transparency, and
              outstanding craftsmanship, 1640 Management has delivered over 120
              luxury homes across the Philippines. We don't just build
              structures — we create legacies.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <HiCheckCircle className="text-gold text-xl flex-shrink-0" />
                  <span className="font-body text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="contact"
              smooth
              duration={700}
              offset={-80}
              className="btn-outline-dark cursor-pointer inline-flex group"
            >
              Start Your Project
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
