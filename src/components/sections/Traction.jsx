import React from 'react';
import { TrendingUp, Award, Building } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import StatCard from '../ui/StatCard';

const Traction = () => {
  const mainStats = [
    { number: 1600, label: 'Active Protected Users', sublabel: 'And growing daily' },
    { number: 20000, label: 'Harmful Videos Blocked Monthly', sublabel: "That's 4,800+ per day" },
    { number: 4.6, label: 'Average User Rating', sublabel: '"I finally feel safe scrolling"' },
  ];

  const subStats = [
    { icon: Building, text: '4 School Safety Workshops Completed' },
    { icon: TrendingUp, text: '2 NGO Partnerships Active' },
    { icon: Award, text: '>92% Content Detection Accuracy' },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white" id="impact">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="eyebrow !text-tertiary">
            PROVEN IMPACT — LIVE FOR 5 MONTHS
          </div>
        </div>
        
        <SectionHeader
          headline="Already Protecting Thousands of Women & Girls"
          centered={true}
        />

        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {mainStats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              sublabel={stat.sublabel}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Sub Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-gray-800">
          {subStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-gray-800/50 px-6 py-4 rounded-full"
              >
                <div className="w-8 h-8 bg-tertiary/20 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-tertiary" />
                </div>
                <span className="text-sm font-semibold">{stat.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Traction;

