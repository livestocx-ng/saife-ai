import React from 'react';
import { AlertTriangle, Clock, Shield } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const Problem = () => {
    const problems = [
        {
            icon: AlertTriangle,
            title: 'Harmful Content Seen Daily',
            description: '"I can\'t scroll without seeing something that makes me feel unsafe."',
            color: 'text-danger',
            bgColor: 'bg-danger/10',
        },
        {
            icon: Clock,
            title: 'Reports Only Work After Harm',
            description: 'Platforms remove content days or weeks later, long after psychological damage.',
            color: 'text-warning',
            bgColor: 'bg-warning/10',
        },
        {
            icon: Shield,
            title: 'Girls Ages 10-24 Most Vulnerable',
            description: 'Peak exposure years with minimal protection tools designed for them.',
            color: 'text-secondary',
            bgColor: 'bg-secondary/10',
        },
    ];

    return (
        <section className="section-padding bg-white" id="problem">
            <div className="container-custom">
                <SectionHeader
                    eyebrow="THE DIGITAL VIOLENCE CRISIS"
                    headline="85% of Women Have Experienced Online Violence. Girls Face It Daily."
                    subheadline="Every day, millions of women and girls are exposed to violent content, cyberbullying, sexualized harassment, and digital coercion on social media."
                />

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The harm happens at the moment of viewing but existing tools only let you
                        report after the damage is done. There`s been no way to prevent exposure
                        before it happens.
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-6">
                        Until now.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <Card key={index} className="text-center">
                                <div className={`w-16 h-16 ${problem.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <Icon className={`w-8 h-8 ${problem.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {problem.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {problem.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Problem;

