import { PhoneCall, AlertTriangle, Clock, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EmergencySection = () => {
  return (
    <section className="bg-amber-500 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Need Emergency Help Right Now?
              </h2>
              <div className="flex items-center gap-4 text-slate-800 font-medium flex-wrap">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 24/7 Availability
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Kitale & Country Wide
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  Fast Response
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="tel:+254729334622"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors px-8 py-4 rounded-xl font-bold text-xl shadow-xl shadow-slate-900/20"
            >
              <PhoneCall className="w-6 h-6" />
              Call +254 729 334622
            </a>
            <a 
              href="mailto:fabianguylord@gmail.com"
              className="flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-50 transition-colors px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              <Mail className="w-6 h-6 text-amber-600" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};