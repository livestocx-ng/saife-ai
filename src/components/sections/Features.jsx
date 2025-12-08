import React from 'react';
import {
    Smartphone,
    Globe,
    Users,
    Flag,
    BookOpen,
    Wifi
} from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Features = () => {
    const features = [
        {
            icon: Globe,
            title: 'Multi-Platform Coverage',
            description: 'Works on TikTok, Instagram, YouTube, Facebook, Snapchat',
            color: 'text-primary',
            bgColor: 'bg-primary/10',
        },
        {
            icon: Smartphone,
            title: 'Mobile Overlay & Browser Extension',
            description: 'Protection everywhere you browse, no platform approval needed',
            color: 'text-secondary',
            bgColor: 'bg-secondary/10',
        },
        {
            icon: Users,
            title: 'Parent/Guardian Dashboard',
            description: 'Optional monitoring for minors with privacy controls',
            color: 'text-tertiary',
            bgColor: 'bg-tertiary/10',
        },
        {
            icon: Flag,
            title: 'Built-In Reporting',
            description: 'Easy escalation for severe content to platforms and authorities',
            color: 'text-danger',
            bgColor: 'bg-danger/10',
        },
        {
            icon: BookOpen,
            title: 'Digital Literacy Education',
            description: 'In-app resources on online safety and resilience',
            color: 'text-success',
            bgColor: 'bg-success/10',
        },
        {
            icon: Wifi,
            title: 'Works Offline-First',
            description: 'Low-resource optimized for mobile-first regions',
            color: 'text-warning',
            bgColor: 'bg-warning/10',
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <SectionHeader
                    headline="Complete Protection Across Every Platform"
                    subheadline="Comprehensive features designed specifically for women and girls' safety online."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index}>
                                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                    <Icon className={`w-7 h-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;

