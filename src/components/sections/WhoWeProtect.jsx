import React from 'react';
import { Users, Heart, GraduationCap, Globe } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const WhoWeProtect = () => {
  const targetGroups = [
    {
      icon: Users,
      title: 'Girls & Young Women (10-24)',
      description: 'Peak exposure risk with minimal existing protection tools',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Heart,
      title: 'Survivors of Digital Harassment',
      description: 'Safe browsing environment for those healing from online violence',
      gradient: 'from-danger to-warning',
    },
    {
      icon: GraduationCap,
      title: 'Schools & Safe Learning Programs',
      description: 'Deployed protection for institutional digital safety programs',
      gradient: 'from-tertiary to-success',
    },
  ];

  const regions = [
    { name: 'Nigeria', status: 'Current', color: 'bg-success' },
    { name: 'Kenya', status: 'Next', color: 'bg-tertiary' },
    { name: 'India', status: 'Next', color: 'bg-tertiary' },
    { name: 'Global', status: 'Vision', color: 'bg-secondary' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          headline="Built Specifically for Women & Girls Aged 10–24"
          subheadline="We're starting where the need is greatest and growing across Africa and Asia with culturally-adapted protection."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {targetGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${group.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {group.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Regional Expansion */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">
              Regional Expansion Map
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-soft"
              >
                <div className={`w-3 h-3 ${region.color} rounded-full`} />
                <div className="text-left">
                  <div className="font-bold text-gray-900">{region.name}</div>
                  <div className="text-xs text-gray-600">{region.status}</div>
                </div>
                {index < regions.length - 1 && (
                  <div className="text-gray-400 ml-2">→</div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            <span className="font-semibold text-gray-900">Vision:</span> Global Protection Infrastructure
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeProtect;

