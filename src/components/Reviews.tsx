import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      text: "Fast, professional, and very tidy. They upgraded our entire kitchen lighting and it looks amazing. Highly recommend!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Mark Thompson",
      role: "Property Manager",
      text: "We've used FABTECH ELECTRICAL S for over 50 emergency calls across our properties. They are always on time and solve the problem.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=mark",
    },
    {
      name: "Elena Rodriguez",
      role: "Store Owner",
      text: "Installed our backup solar system and security cameras. The installation was seamless and their tech support is top-notch.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=elena",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-wider text-amber-500 uppercase mb-3">Testimonials</h2>
        <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-16">What Our Customers Say</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-sm relative group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-8 right-10 text-slate-100 group-hover:text-amber-100 transition-colors">
                <Quote className="w-16 h-16 fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex flex-col items-center">
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full border-4 border-slate-50 mb-4" />
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-slate-400 text-sm font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-14 h-14 rounded-full border-4 border-white shadow-md" />
              ))}
              <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold border-4 border-white shadow-md">
                +2k
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 text-xl">Join 2,000+ happy clients</p>
              <p className="text-slate-500">Professional services since 2012</p>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all w-full md:w-auto">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};