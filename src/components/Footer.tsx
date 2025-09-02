// src/components/Footer.tsx
import Image from "next/image";
import { Facebook, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-orange-50 shadow-2xl text-gray-600 py-10 mt-16 w-full md:w-full lg:w-4/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div className="flex-col items-center">
          <Image
                src="/logo.png"  
                alt="WebWorks logo"
                width={200}     
                height={0}
                className="w-60 h-auto"
                priority
                />
            <p className="text-sm opacity-80 mt-4">
              Building modern, responsive, and optimized digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="menu-link hover:text-purple-400 transition">Home</a></li>
              <li><a href="#experience" className="menu-link hover:text-purple-400 transition">Experience</a></li>
              <li><a href="#services" className="menu-link hover:text-purple-400 transition">Services</a></li>
              <li><a href="#projects" className="menu-link hover:text-purple-400 transition">Projects</a></li>
              <li><a   href="https://m.me/ronnel.santos08" 
                        target="_blank" 
                        rel="noopener noreferrer" className="menu-link hover:text-purple-400 transition">Message Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Get in Touch</h4>
            <p className="text-sm opacity-80 flex gap-2 py-2"><Mail size={20} /> <a href="Mailto:ronnel.santos08@gmail.com">ronnel.santos08@example.com</a></p>
            <p className="text-sm opacity-80 flex gap-2 py-2"><Phone size={20} /><a href="Tel:+639757946973">+63 975 794 6973</a></p>



            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
            <a
                href="https://facebook.com/ronnel.santos08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Facebook profile"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-300 text-gray-900 transform transition-all duration-300 hover:rotate-6 hover:bg-purple-400">
                <Facebook size={20} aria-hidden="true" />
            </a>
            <a
                href="https://m.me/ronnel.santos08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send me a message on Messenger"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-300 text-gray-900 transform transition-all duration-300 hover:-rotate-6 hover:bg-purple-400">
                <MessageCircle size={20} aria-hidden="true" />
            </a>
            <a
                href="https://linkedin.com/in/ronnel-santos-16aba8280"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-300 text-gray-900 transform transition-all duration-300 hover:rotate-6 hover:bg-purple-400">
                <Linkedin size={20} aria-hidden="true" />
            </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm opacity-70">
          © {new Date().getFullYear()} Webworks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
