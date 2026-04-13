import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

export interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
}

interface GalleryProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    category: "Industrial",
    title: "Industrial Power Solutions",
    description: "Comprehensive industrial electrical installation and panel maintenance.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/attachments/4e574246-d450-44cf-9bff-d9828a5a70af/1776084799274_inbound1388959360285076871.jpg",
  },
  {
    category: "Solar",
    title: "Solar Installation Kitale",
    description: "High-efficiency solar panels and battery storage for a residential property in Kitale.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/solar-installation-1-7ed22fa3-1776084603335.webp",
  },
  {
    category: "Industrial",
    title: "Industrial Control Panel",
    description: "Custom-built industrial control panels with automated failover systems.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/industrial-panel-1-ed874cb7-1776084603698.webp",
  },
  {
    category: "Residential",
    title: "Modern Kitchen Lighting",
    description: "Warm ambient pendant and recessed LED lighting for a contemporary kitchen.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/residential-lighting-1-c11078bc-1776084602573.webp",
  },
  {
    category: "Security",
    title: "Perimeter Security",
    description: "IP camera system with motion-detecting floodlights for 24/7 security.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/security-system-1-9ef5f45e-1776084603627.webp",
  },
  {
    category: "Solar",
    title: "Backup Power Solutions",
    description: "Installation of a seamless backup power system for critical home appliances.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/backup-power-1-155a518c-1776084603451.webp",
  },
  {
    category: "Residential",
    title: "Smart Home Integration",
    description: "Centralized home automation system controlling lights, power, and security.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/smart-home-1-ce87f68f-1776084602577.webp",
  },
  {
    category: "Industrial",
    title: "Commercial Rewiring",
    description: "Full office electrical renovation including data cabling and industrial conduit.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/commercial-renovation-1-f29965d0-1776084602447.webp",
  },
  {
    category: "Emergency",
    title: "24/7 Emergency Repairs",
    description: "Rapid response electrical troubleshooting and repair services across Kenya.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78a3b388-5058-435b-909e-8504e35a5f50/emergency-repair-1-a9e4451b-1776084606569.webp",
  },
];

export const Gallery = ({ projects = defaultProjects }: GalleryProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3 text-left">Success Stories</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-left">Before & After Showcase</p>
            <p className="text-slate-600 text-lg text-left">
              Explore our portfolio of professional electrical work in Kitale and country-wide. We pride ourselves on safety, quality, and reliability.
            </p>
          </div>

          <Tabs value={activeCategory} className="w-full md:w-auto">
            <TabsList className="bg-white border border-slate-200 overflow-x-auto">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
                  <p className="text-slate-300 line-clamp-2 max-w-sm text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};