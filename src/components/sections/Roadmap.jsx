import { Brain, School, Users, CheckCircle, Target } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Roadmap = () => {
    const phases = [
        {
            phase: 'Phase 1',
            duration: 'Months 1-3',
            title: 'Strengthening AI Model',
            icon: Brain,
            color: 'primary',
            milestones: [
                'Regional language dataset expansion (Hausa, Swahili, Hindi)',
                'Violence spectrum detection accuracy >92%',
                'Enhanced mobile optimization for low-connectivity regions',
            ],
        },
        {
            phase: 'Phase 2',
            duration: 'Months 3-7',
            title: 'School & NGO Distribution',
            icon: School,
            color: 'secondary',
            milestones: [
                'Deploy to 150+ schools',
                'Reach 50,000 teen girls through institutional partnerships',
                'Launch parent/guardian dashboard features',
                'Complete 20+ digital safety workshops',
            ],
        },
        {
            phase: 'Phase 3',
            duration: 'Months 7-12',
            title: 'Platform Partnerships & Scale',
            icon: Users,
            color: 'tertiary',
            milestones: [
                'Integration MoUs with Meta, TikTok, Snap, or YouTube',
                'Reach 100,000 protected users',
                'Block 30M+ harmful content impressions',
                'Publish Safety Impact Report',
            ],
        },
    ];

    const colorMap = {
        primary: {
            bg: 'bg-primary',
            text: 'text-primary',
            border: 'border-primary',
            gradient: 'from-primary to-primary-light',
        },
        secondary: {
            bg: 'bg-secondary',
            text: 'text-secondary',
            border: 'border-secondary',
            gradient: 'from-secondary to-secondary-light',
        },
        tertiary: {
            bg: 'bg-tertiary',
            text: 'text-tertiary',
            border: 'border-tertiary',
            gradient: 'from-tertiary to-tertiary-light',
        },
    };

    return (
        <section className="section-padding bg-gray-50" id="roadmap">
            <div className="container-custom">
                <div className="text-center mb-6">
                    <div className="eyebrow">SCALING PLAN</div>
                </div>

                <SectionHeader
                    headline="From 6,000 to 100,000 Protected Users in 12 Months"
                    subheadline="With funding and partnership support, we're scaling Saife AI into a continental protection infrastructure."
                />

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-secondary"
                        style={{ top: '120px' }}
                    />

                    <div className="grid lg:grid-cols-3 gap-8 relative">
                        {phases.map((phase, index) => {
                            const Icon = phase.icon;
                            const colors = colorMap[phase.color];

                            return (
                                <div key={index} className="relative">
                                    {/* Phase Card */}
                                    <div className="bg-white rounded-2xl shadow-medium p-8 hover:shadow-strong transition-all duration-300">
                                        {/* Phase Header */}
                                        <div className="text-center mb-6">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10`}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <div className={`text-sm font-bold ${colors.text} mb-2`}>
                                                {phase.phase}
                                            </div>
                                            <div className="text-xs text-gray-500 font-medium">
                                                {phase.duration}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mt-3">
                                                {phase.title}
                                            </h3>
                                        </div>

                                        {/* Milestones */}
                                        <div className="space-y-3">
                                            {phase.milestones.map((milestone, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                                    <p className="text-sm text-gray-700 leading-relaxed">
                                                        {milestone}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* End Goal Highlight */}
                <div className="mt-16 bg-gradient-to-br from-primary via-primary-light to-secondary rounded-2xl p-1">
                    <div className="bg-white rounded-xl p-8 md:p-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Target className="w-8 h-8 text-secondary" />
                            <h3 className="text-2xl font-bold text-gray-900">
                                End-of-Year Impact Goal
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="stat-number mb-2">100K</div>
                                <div className="text-lg font-semibold text-gray-900">
                                    Women & Girls Protected
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="stat-number mb-2">30M+</div>
                                <div className="text-lg font-semibold text-gray-900">
                                    Harmful Content Impressions Blocked
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="stat-number mb-2">300+</div>
                                <div className="text-lg font-semibold text-gray-900">
                                    Schools Onboarded
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

