import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '../data/projects';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-28 bg-light-gray">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-subtitle"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Featured{' '}
              <span className="italic text-gold">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-gray-500 max-w-sm leading-relaxed text-sm"
          >
            A selection of our finest custom homes, each a testament to
            precision craftsmanship and inspired design.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-body text-gold text-xs tracking-widest uppercase">
                  {project.category} · {project.year}
                </span>
                <h3 className="font-heading text-white text-2xl mt-1 mb-1">
                  {project.name}
                </h3>
                <p className="font-body text-white/70 text-sm">{project.location}</p>

                {/* View Project CTA */}
                <div className="flex items-center gap-2 mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <span className="font-body text-gold text-sm font-semibold tracking-wider uppercase">
                    View Project
                  </span>
                  <HiArrowRight className="text-gold text-sm" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
