import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiOutlineHome,
  HiOutlinePencilAlt,
  HiOutlineRefresh,
  HiOutlineClipboardList,
  HiOutlineStar,
} from 'react-icons/hi';
import { services } from '../data/services';

const iconMap = {
  HiOutlineHome,
  HiOutlinePencilAlt,
  HiOutlineRefresh,
  HiOutlineClipboardList,
  HiOutlineStar,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 bg-charcoal">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-subtitle"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-white text-4xl md:text-5xl max-w-2xl mx-auto"
          >
            Our{' '}
            <span className="italic text-gold">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-12 h-0.5 bg-gold mx-auto mt-6"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="group relative bg-charcoal-800 border border-white/5 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)] cursor-default"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6 w-14 h-14 bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  {Icon && <Icon className="text-gold text-2xl" />}
                </div>

                <h3 className="font-heading text-white text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
