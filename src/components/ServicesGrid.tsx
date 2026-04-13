import { 
  Zap, 
  Sun, 
  Cctv, 
  Wrench, 
  Lightbulb, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const ServicesGrid = () => {
  const services = [
    {
      title: "New Installations",
      description: "Full electrical design and wiring for new residential and commercial builds.",
      icon: <Zap className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/emergency-electrical-service-40502c27-1776082510252.webp",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Backup Solar Systems",
      description: "Harness clean energy with custom solar panel and battery backup installations.",
      icon: <Sun className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/backup-solar-system-installation-69a30dd9-1776082506572.webp",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Security & CCTV",
      description: "Advanced surveillance and smart security systems for total home protection.",
      icon: <Cctv className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/security-camera-systems-65076d46-1776082508294.webp",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Maintenance & Repairs",
      description: "Comprehensive testing, fault finding, and routine maintenance for any system.",
      icon: <Wrench className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/electrical-maintenance-service-942ef6e3-1776082506884.webp",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Interior Lighting Design",
      description: "Transform your spaces with expert lighting layouts and smart controls.",
      icon: <Lightbulb className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/interior-electrical-design-d733d14b-1776082507992.webp",
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Safety Inspections",
      description: "Certified safety audits to ensure your property meets all current codes.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/maintenance-tips-6ff2c1b7-1776082510015.webp",
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Electrical Solutions</p>
          <p className="text-slate-600 text-lg">
            We offer a wide range of services tailored to meet the specific needs of residential, commercial, and industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-slate-100 hover:border-amber-200 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className={`absolute bottom-4 left-4 p-3 rounded-xl ${service.color}`}>
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-amber-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};