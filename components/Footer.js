import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="bg-white h-1 opacity-10"></div>
      <footer className="w-full bg-black text-gray-400 pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand Section */}
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-white font-bold text-xl mb-4">Get Me A Kofi</h2>
              <p className="text-sm leading-relaxed">
                Empowering creators to do what they love, one caffeine-fueled project at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Showcase</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
              </ul>
            </div>

            {/* Socials / Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
              <div className="flex gap-4">
                {/* You can replace these with actual icons (Lucide/FontAwesome) */}
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">𝕏</div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">📸</div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">🐙</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Get Me A Kofi. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Status</span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;