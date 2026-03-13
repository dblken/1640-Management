import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-28 bg-charcoal" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-subtitle"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-white text-4xl md:text-5xl"
          >
            What Our{' '}
            <span className="italic text-gold">Clients Say</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-charcoal-800 border border-white/10 p-10 md:p-14">
            {/* Quote mark */}
            <div className="font-heading text-gold/20 text-8xl font-bold absolute top-4 left-8 leading-none select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <HiStar key={i} className="text-gold text-lg" />
              ))}
            </div>

            {/* Review text */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-body text-white/80 text-lg leading-relaxed italic mb-8"
              >
                "{testimonials[current].review}"
              </motion.blockquote>
            </AnimatePresence>

            {/* Client info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`meta-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-white/10 pt-6"
              >
                <p className="font-heading text-white text-lg">{testimonials[current].name}</p>
                <p className="font-body text-gold text-sm tracking-wider uppercase mt-1">
                  {testimonials[current].project}
                </p>
                <p className="font-body text-white/50 text-xs mt-1">{testimonials[current].location}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-1 bg-gold'
                      : 'w-4 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 border border-white/20 text-white hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <HiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 bg-gold text-white hover:bg-gold-dark flex items-center justify-center transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <HiChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
