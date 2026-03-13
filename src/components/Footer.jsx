import { Link } from 'react-scroll';
import { HiArrowUp } from 'react-icons/hi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa';

const quickLinks = [
  { label: 'About Us', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Featured Projects', to: 'projects' },
  { label: 'Our Process', to: 'process' },
  { label: 'Contact', to: 'contact' },
];

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaPinterestP, href: '#', label: 'Pinterest' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <span className="font-heading text-white text-3xl font-bold tracking-tight block leading-none">
                1640
              </span>
              <span className="font-body text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Management
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Luxury custom home builders delivering precision craftsmanship and
              exceptional design across the Philippines.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-7">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-80}
                    className="font-body text-white/50 text-sm hover:text-gold transition-colors duration-300 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-white/50 text-sm">
                +63 (2) 8123-4567
              </li>
              <li>
                <a
                  href="mailto:hello@1640management.com"
                  className="font-body text-white/50 text-sm hover:text-gold transition-colors duration-300"
                >
                  hello@1640management.com
                </a>
              </li>
              <li className="font-body text-white/50 text-sm leading-relaxed">
                Alabang, Muntinlupa City
                <br />
                Metro Manila, Philippines
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs tracking-wide">
            © {currentYear} 1640 Management. All rights reserved.
          </p>
          <Link
            to="hero"
            smooth
            duration={700}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <HiArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
