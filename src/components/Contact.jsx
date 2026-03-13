import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+63 (2) 8123-4567',
    href: 'tel:+6328123456',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'hello@1640management.com',
    href: 'mailto:hello@1640management.com',
  },
  {
    icon: HiLocationMarker,
    label: 'Office',
    value: 'Alabang, Muntinlupa City, Metro Manila',
    href: '#',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 bg-light-gray" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-subtitle"
          >
            Let's Build Together
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Request a{' '}
            <span className="italic text-gold">Consultation</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center gap-10"
          >
            <div>
              <h3 className="font-heading text-charcoal text-2xl mb-4">
                Start Your Journey
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                Whether you're planning a custom build, a luxury renovation, or
                simply exploring the possibilities — we'd love to hear from you.
                Reach out and let's talk.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-11 h-11 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                      <Icon className="text-gold text-lg group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-body text-gold text-xs tracking-widest uppercase mb-1">
                        {info.label}
                      </p>
                      <p className="font-body text-charcoal text-sm leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 shadow-xl"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <HiArrowRight className="text-gold text-2xl" />
                </div>
                <h3 className="font-heading text-charcoal text-2xl mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-gray-500">
                  Thank you. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Santos"
                      className="w-full border border-gray-200 focus:border-gold focus:outline-none px-4 py-3 font-body text-charcoal text-sm transition-colors duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="w-full border border-gray-200 focus:border-gold focus:outline-none px-4 py-3 font-body text-charcoal text-sm transition-colors duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 9XX XXX XXXX"
                    className="w-full border border-gray-200 focus:border-gold focus:outline-none px-4 py-3 font-body text-charcoal text-sm transition-colors duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-gray-500 tracking-widest uppercase block mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your dream home or project..."
                    className="w-full border border-gray-200 focus:border-gold focus:outline-none px-4 py-3 font-body text-charcoal text-sm transition-colors duration-300 bg-gray-50 focus:bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center hover:shadow-lg group"
                >
                  Send Request
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
