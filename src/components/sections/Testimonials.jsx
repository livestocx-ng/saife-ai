import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const gradients = [
  'from-pink-500 to-rose-500',
  'from-purple-500 to-indigo-500',
  'from-blue-400 to-cyan-400',
  'from-teal-400 to-emerald-400',
  'from-orange-400 to-amber-400',
  'from-red-400 to-pink-400',
  'from-violet-500 to-purple-500',
  'from-green-500 to-emerald-500',
  'from-blue-500 to-indigo-600',
  'from-rose-400 to-orange-400',
  'from-cyan-500 to-blue-500',
  'from-fuchsia-500 to-pink-500',
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://infra-girlified.livestocx.xyz/v1/engagement/testimonials/feed');
        if (response.ok) {
          const data = await response.json();
          const formattedData = data.map((item, index) => ({
            name: item.author,
            age: item.age,
            quote: item.testimonial,
            handle: item.handle,
            platform: item.platform,
            image: item.avatarUrl,
            gradient: gradients[index % gradients.length]
          }));
          setTestimonials(formattedData);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom mb-12">
        <SectionHeader
          headline="I Finally Feel Safe Online"
          subheadline="Real stories from youths and teenagers using Saife AI every day."
        />
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade feeling at edges (optional but nice) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white z-10 hidden md:block"></div>

        <div className="flex">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 50 
            }}
            initial={{ x: 0 }}
            style={{ width: "fit-content" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative flex-shrink-0 w-[300px] md:w-[400px] hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Background Gradient Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5`} />

                {/* Quote Icon */}
                <div className={`absolute top-6 right-6 w-10 h-10 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full flex items-center justify-center z-10`}>
                  <Quote className="w-5 h-5 text-gray-700" />
                </div>

                {/* Content */}
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm overflow-hidden`}>
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                          {testimonial.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium">
                          {testimonial.age}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {testimonial.handle.length > 4 && (
                     <div className="pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex text-xs text-gray-500">
                           <span className="font-medium mr-1">Handle:</span> {testimonial.handle} 
                           {testimonial.platform && ` • ${testimonial.platform}`}
                        </div>
                     </div>
                  )}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
