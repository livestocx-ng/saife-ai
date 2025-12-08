import React from 'react';
import { Quote } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Before Saife AI, I'd see triggering content every time I opened TikTok. Now I can actually enjoy social media without fear.",
      author: 'User, Age 19',
      location: 'Lagos, Nigeria',
      gradient: 'from-primary to-primary-light',
    },
    {
      quote: "As a mother, knowing my daughter has this protection gives me peace of mind. The dashboard lets me support her without invading her privacy.",
      author: 'Parent',
      location: 'Nairobi, Kenya',
      gradient: 'from-secondary to-tertiary',
    },
    {
      quote: "We deployed Saife AI across our girls' school. The difference in their digital wellbeing has been measurable.",
      author: 'School Administrator',
      location: 'Digital Safety Program',
      gradient: 'from-tertiary to-success',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          headline="I Finally Feel Safe Online"
          subheadline="Real stories from women and girls using Saife AI every day."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full flex items-center justify-center`}>
                <Quote className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

