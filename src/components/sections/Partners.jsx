import React from 'react';
import { Users, School, Building, TrendingUp } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const Partners = () => {
    const partnerCategories = [
        { icon: Users, label: 'NGO Partners', count: '2+' },
        { icon: School, label: 'School Partners', count: '150+' },
        { icon: Building, label: 'Technology Partners', count: 'Growing' },
        { icon: TrendingUp, label: 'Impact Funders', count: 'Join Us' },
    ];

    return (
        <section className="section-padding bg-gray-50" id="partners">
            <div className="container-custom">
                <SectionHeader
                    headline="Supported By Leaders in Safety, Technology & Women's Rights"
                    subheadline="We partner with organizations committed to ending digital violence against women and girls."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {partnerCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all text-center"
                            >
                                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-7 h-7 text-secondary" />
                                </div>
                                <div className="font-bold text-2xl gradient-text mb-1">
                                    {category.count}
                                </div>
                                <div className="text-sm font-semibold text-gray-700">
                                    {category.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Partner Logos Placeholder */}
                {/* <div className="bg-white rounded-2xl p-12 shadow-medium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-30">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-gray-500 font-semibold">
                  Partner Logo
                </span>
              </div>
            ))}
          </div>
        </div> */}

                {/* CTA */}
                {/* <div className="text-center mt-12">
                    <Button variant="secondary" icon="arrow">
                        Become a Partner
                    </Button>
                </div> */}
            </div>
        </section>
    );
};

export default Partners;

