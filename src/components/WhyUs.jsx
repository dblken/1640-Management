import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineHeart,
} from 'react-icons/hi';

const reasons = [
  {
    icon: HiOutlineBadgeCheck,
    title: 'Experienced Builders',
    description:
      'Over 15 years of industry expertise with a proven track record of delivering luxury homes on time and on budget.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'High-End Craftsmanship',
    description:
      'We partner with master craftsmen and source premium materials to ensure every detail exceeds the highest standards.',
  },
  {
    icon: HiOutlineClock,
    title: 'Transparent Project Management',
    description:
      "Real-time project tracking, weekly updates, and full financial transparency — you're always in the loop.",
  },
  {
    icon: HiOutlineHeart,
    title: 'Client-Centered Design',
    description:
      'Your lifestyle, preferences, and values drive every design decision. We listen deeply before we build.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-28 bg-cream">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-subtitle"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title mb-6"
            >
              Building with{' '}
              <span className="italic text-gold">Purpose & Precision</span>
            </motion.h2>
            <div className="gold-line mb-8" />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-gray-600 leading-relaxed text-lg"
            >
              When you choose 1640 Management, you're choosing a partner who
              invests as deeply in your home as you do. Our commitment extends
              well beyond construction — we're with you from dream to deed.
            </motion.p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group p-7 bg-white border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-400 cursor-default"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="text-gold text-2xl" />
                  </div>
                  <h3 className="font-heading text-charcoal text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
