import React from 'react';
import { Award, Users, Shield, Heart } from 'lucide-react';

const TrustBar = () => {
  const stats = [
    { icon: Users, label: '150+ Schools Deploying' },
    { icon: Shield, label: 'Privacy First Protection' },
    { icon: Heart, label: 'Built for Women & Girls' },
    { icon: Award, label: 'Featured by Safety Orgs' },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold tracking-wider uppercase text-gray-500">
            Trusted By
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

