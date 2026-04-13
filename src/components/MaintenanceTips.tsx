import { BookOpen, Shield, Flame, Battery, Info } from "lucide-react";

export const MaintenanceTips = () => {
  const tips = [
    {
      title: "Test Your RCDs Monthly",
      description: "Press the 'Test' button on your safety switches to ensure they trip. It takes 10 seconds and saves lives.",
      icon: <Shield className="w-5 h-5" />,
      tag: "Safety",
    },
    {
      title: "Avoid Daisy-Chaining",
      description: "Never plug power strips into other power strips. This is a common cause of electrical fires.",
      icon: <Flame className="w-5 h-5" />,
      tag: "Fire Hazard",
    },
    {
      title: "Solar Panel Cleaning",
      description: "Dust and debris can reduce efficiency by 25%. Rinse with water twice a year for peak performance.",
      icon: <Battery className="w-5 h-5" />,
      tag: "Solar",
    },
  ];

  return (
    <section id="tips" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Safety First</h2>
            <p className="text-4xl font-bold text-slate-900">Maintenance & Safety Tips</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-slate-900 font-bold hover:text-amber-500 transition-colors">
            <BookOpen className="w-5 h-5" /> View Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                  {tip.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{tip.tag}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{tip.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {tip.description}
              </p>
              <button className="text-amber-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read guide <Info className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative h-[300px] rounded-[3rem] overflow-hidden">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/maintenance-tips-6ff2c1b7-1776082510015.webp" 
            alt="Safety checklist"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-center items-center p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Download Our Safety Checklist</h3>
            <p className="text-slate-200 max-w-xl mb-8">
              A comprehensive guide to keeping your home electrical system safe and efficient. Free for all local residents.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-amber-500 hover:text-white transition-colors">
              Get PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};