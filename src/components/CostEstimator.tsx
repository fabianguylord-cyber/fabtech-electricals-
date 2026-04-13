import { useState } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const CostEstimator = () => {
  const [outlets, setOutlets] = useState([2]);
  const [lights, setLights] = useState([4]);
  const [panelUpgrade, setPanelUpgrade] = useState(false);

  const calculateEstimate = () => {
    const base = 2500; // Call out fee in KES
    const perOutlet = 1500; // Per outlet in KES
    const perLight = 2000; // Per light in KES
    const panelCost = panelUpgrade ? 35000 : 0; // Panel upgrade in KES
    
    return base + (outlets[0] * perOutlet) + (lights[0] * perLight) + panelCost;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="estimate" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-8 md:p-12 lg:w-1/2">
            <div className="flex items-center gap-3 text-amber-500 mb-6">
              <Calculator className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">Instant Estimate</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Project Cost Calculator</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Get a rough idea of your project costs in Kenyan Shillings. Final quotes provided after site inspection.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium">New Outlets / Points</label>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">{outlets[0]}</span>
                </div>
                <Slider 
                  value={outlets} 
                  onValueChange={setOutlets} 
                  max={50} 
                  step={1} 
                  className="[&_[role=slider]]:bg-amber-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium">Light Fixtures</label>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">{lights[0]}</span>
                </div>
                <Slider 
                  value={lights} 
                  onValueChange={setLights} 
                  max={50} 
                  step={1} 
                  className="[&_[role=slider]]:bg-amber-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setPanelUpgrade(!panelUpgrade)}
                  className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${
                    panelUpgrade ? "bg-amber-500 border-amber-500" : "border-slate-700 bg-slate-800"
                  }`}
                  aria-label="Toggle Panel Upgrade"
                >
                  {panelUpgrade && <Check className="w-4 h-4 text-slate-900" />}
                </button>
                <span className="text-white">Full Panel / Switchboard Upgrade (Optional)</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-amber-500 p-8 md:p-12 flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <p className="text-slate-900 font-bold uppercase tracking-widest text-sm mb-2">Estimated Range</p>
              <div className="flex items-baseline gap-2 mb-8 flex-wrap">
                <span className="text-5xl md:text-6xl font-black text-slate-900">{formatCurrency(calculateEstimate())}</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-500" />
                  </div>
                  <span>Licensed Electrician</span>
                </div>
                <div className="flex items-center gap-3 text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-500" />
                  </div>
                  <span>Compliance Certificate</span>
                </div>
                <div className="flex items-center gap-3 text-slate-900">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-500" />
                  </div>
                  <span>Standard 5-Year Warranty</span>
                </div>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-16 text-lg rounded-2xl">
                Lock In This Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-center text-slate-800 text-sm mt-6 font-medium">
              *Estimate is indicative only. Call for a formal quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};