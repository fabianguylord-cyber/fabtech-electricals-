import { useState } from "react";
import { Calendar as CalendarIcon, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const BookingSystem = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Booking Request Sent!", {
        description: "Our team will call you within 15 minutes to confirm.",
      });
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Get Started</h2>
            <p className="text-4xl md:text-5xl font-bold text-white mb-8">Book a Professional Electrician</p>\
            <p className="text-slate-400 text-lg mb-12">
              Select your preferred date and tell us about your project. We'll match you with the best specialist for the job.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call for Urgent Jobs</h4>
                  <p className="text-slate-400">Response within 60 minutes for emergencies.</p>
                  <a href="tel:+254729334622" className="text-amber-500 font-bold text-xl mt-1 block">+254 729 334622</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Support</h4>
                  <p className="text-slate-400">For non-urgent inquiries and project details.</p>
                  <a href="mailto:fabianguylord@gmail.com" className="text-amber-500 font-bold text-lg mt-1 block hover:underline transition-all">fabianguylord@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Service Areas</h4>
                  <p className="text-slate-400">Based in Kitale, Kenya. Flexible and available for projects country-wide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>\
                  <Input placeholder="John Doe" required className="bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <Input type="tel" placeholder="+254 XXX XXX XXX" required className="bg-slate-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Type</label>
                <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm">
                  <option>General Maintenance</option>
                  <option>Emergency Repair</option>
                  <option>Solar Installation</option>
                  <option>Security/CCTV</option>
                  <option>Lighting Design</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" /> Select Preferred Date
                </label>
                <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 font-bold text-lg rounded-xl"
              >
                {loading ? "Requesting..." : "Send Booking Request"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                No upfront payment required
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};