import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description:
      'We begin by understanding your vision, budget, lifestyle, and land. Our team asks the right questions to ensure your dream home is achievable.',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description:
      'Our architects develop detailed blueprints, 3D renders, and material specifications — iterating until every detail aligns with your expectations.',
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'Expert craftsmen bring the design to life with precision. Regular site visits and transparent progress reports keep you fully informed.',
  },
  {
    number: '04',
    title: 'Handover & Aftercare',
    description:
      'We walk you through your completed home, ensuring every element meets our exacting standards — and provide ongoing support after handover.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="py-28 bg-charcoal overflow-hidden">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-subtitle"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-white text-4xl md:text-5xl"
          >
            Our{' '}
            <span className="italic text-gold">Process</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group p-8 border-l border-white/10 first:border-l-0 md:border-t-0"
            >
              {/* Step number */}
              <div className="font-heading text-gold/20 text-7xl font-bold absolute top-6 right-6 leading-none select-none group-hover:text-gold/40 transition-colors duration-300">
                {step.number}
              </div>

              {/* Gold dot connector */}
              <div className="w-3 h-3 bg-gold rounded-full mb-8 group-hover:scale-125 transition-transform duration-300" />

              <h3 className="font-heading text-white text-xl mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-600" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
