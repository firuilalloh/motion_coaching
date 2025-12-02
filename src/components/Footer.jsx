import React from "react";
import {
  MessageCircle,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">MOTION</span>
              <span className="text-[#F5C542] text-3xl font-bold ml-1">.</span>
            </div>
            <p className="text-white/70 mb-4">Move With Meaning</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Coaching berbasis makna untuk Gen Z yang ingin menemukan arah dan
              menavigasi masa depan dengan percaya diri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#F5C542]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/70 hover:text-[#F5C542] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("framework")}
                  className="text-white/70 hover:text-[#F5C542] transition-colors"
                >
                  Framework
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-white/70 hover:text-[#F5C542] transition-colors"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("tools")}
                  className="text-white/70 hover:text-[#F5C542] transition-colors"
                >
                  Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-white/70 hover:text-[#F5C542] transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          {/* <div>
            <h4 className="font-bold text-lg mb-4 text-[#F5C542]">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Gen Z Career Direction</li>
              <li className="text-white/70">Leadership Acceleration</li>
              <li className="text-white/70">Talent Pool Development</li>
              <li className="text-white/70">Quarter-Life Navigation</li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#F5C542]">Contact</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285875000806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#F5C542] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>0858-7500-0806</span>
              </a>
              <a
                href="mailto:motionmeaningcoaching@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#F5C542] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>motionmeaningcoaching@gmail.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3 text-white/80">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/motioncoachingid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#F5C542] transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                {/* <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#F5C542] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#F5C542] transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} MOTION Coaching. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#F5C542] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#F5C542] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
