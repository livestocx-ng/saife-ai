import React from 'react';
import { Shield, Mail, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    about: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Impact Report', href: '#impact' },
      { label: 'Press Kit', href: '#press' },
    ],
    users: [
      { label: 'Download App', href: 'https://drive.google.com/file/d/1EK9aWxXKVvLj2d1oyOTY637YjApuhZ34/view?usp=sharing', target: '_blank', rel: 'noopener noreferrer' },
      { label: 'Browser Extension', href: '#extension' },
      { label: 'Help Center', href: '#help' },
      { label: 'Privacy & Security', href: '#privacy' },
    ],
    institutions: [
      { label: 'Schools & Education', href: '#schools' },
      { label: 'NGO Partnerships', href: '#ngo' },
      { label: 'Corporate Support', href: '#corporate' },
      { label: 'Investor Relations', href: '#investors' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white">
                Saife AI
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Protecting women and girls from digital violence through real-time
              AI-powered content filtering. Building a safer internet for everyone.
            </p>
            {/* <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">For Users</h4>
            <ul className="space-y-3">
              {footerLinks.users.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Institutions Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">For Institutions</h4>
            <ul className="space-y-3">
              {footerLinks.institutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl">
            <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Saife AI. Protecting women and girls from digital violence.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#security" className="text-gray-500 hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

