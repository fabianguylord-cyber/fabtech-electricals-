import { Zap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                FABTECH ELECTRICAL S
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for all electrical needs. Licensed, insured, and committed to excellence in every project we undertake.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#estimate" className="hover:text-amber-500 transition-colors">Cost Estimator</a></li>
              <li><a href="#booking" className="hover:text-amber-500 transition-colors">Book Online</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Project Gallery</a></li>
              <li><a href="#tips" className="hover:text-amber-500 transition-colors">Safety Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Solar Systems</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Emergency Repair</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Security/CCTV</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Wiring</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Smart Home Tech</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <p>Kitale, Kenya</p>
                  <p className="text-amber-500/80 text-xs font-medium mt-1 uppercase tracking-wider">Flexible - Country Wide Service Available</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:+254729334622" className="hover:text-amber-500 transition-colors">+254 729 334622</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:fabianguylord@gmail.com" className="hover:text-amber-500 transition-colors">fabianguylord@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 FABTECH ELECTRICAL S. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};