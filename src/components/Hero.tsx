import { ArrowRight, ShieldCheck, Zap, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/emergency-electrical-service-40502c27-1776082510252.webp"
          alt="Professional Electrician"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-sm font-semibold mb-6 border border-amber-500/30 text-nowrap">
              < Zap className="w-4 h-4" />
              Kitale & Country Wide Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Powering Your <br />
            <span className="text-amber-500">Peace of Mind</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl"
          >
            Based in Kitale, Kenya and serving clients country-wide. 
            From emergency repairs to smart home installations and backup solar systems, 
            FABTECH ELECTRICAL S provides reliable electrical solutions for your home and business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 h-14 text-lg rounded-xl shadow-lg shadow-amber-500/20" asChild>
              <a href="#estimate">
                Get an Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg rounded-xl backdrop-blur-sm" asChild>
              <a href="#services">View Our Services</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold">24/7 Response</p>
                <p className="text-slate-400 text-xs text-nowrap">Rapid emergency team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold">Kitale Based</p>
                <p className="text-slate-400 text-xs">Serving Country-Wide</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};