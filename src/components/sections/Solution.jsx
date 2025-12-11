import { SkipForward, Eye, Ban, Shield, Brain, Lock, MessageCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const Solution = () => {
    const features = [
        {
            title: 'Auto-Skip Harmful Videos',
            description: 'When Saife AI detects violent, sexualized, or abusive content, the video is automatically skipped to the next safe post. You never see it. You never have to report it. Protection happens before exposure.',
            icon: SkipForward,
            gradient: 'from-success to-tertiary',
            image: 'saife_ai1.JPG',
        },
        {
            title: 'Blur Questionable Content with Warnings',
            description: 'For borderline content, Saife AI blurs the image or video and shows a content warning. You decide if you want to view it but you\'re never caught off guard by triggering material.',
            icon: Eye,
            gradient: 'from-warning to-danger',
            image: 'saife_ai2.JPG',
        },
        {
            title: 'Filter Toxic Comments & Harassment in Real-Time',
            description: 'Saife AI detects and hides misogynistic, abusive, or harassing comments as they appear. No more scrolling through hate. No more psychological toll from anonymous bullying.',
            icon: Ban,
            gradient: 'from-primary to-primary-light',
            image: 'saife_ai3.jpg',
        },
    ];

    const techFeatures = [
        { icon: Brain, text: 'Computer Vision detects violent/sexual visual content' },
        { icon: MessageCircle, text: 'NLP toxicity classifiers analyze text, captions, and audio' },
        { icon: Shield, text: 'Multi-lingual datasets for local contexts (Hausa, Swahili, Hindi)' },
        { icon: Lock, text: 'Privacy-first: On-device inference, no data sold or shared' },
    ];

    return (
        <section className="section-padding bg-gray-50" id="how-it-works">
            <div className="container-custom">
                <SectionHeader
                    eyebrow="HOW SAIFE AI WORKS"
                    headline="Prevention, Not Reaction. Protection Before Exposure."
                    subheadline="Saife AI analyzes content in real-time using advanced AI vision and natural language processing. When harmful content is detected, we act instantly."
                />

                {/* Feature Blocks */}
                <div className="space-y-24 mb-20">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isReversed = index % 2 === 1;

                        return (
                            <div
                                key={index}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''
                                    }`}
                            >
                                {/* Text Content */}
                                <div className={isReversed ? 'lg:col-start-2' : ''}>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-display-sm mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Visual Mockup */}
                                <div className={`relative ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                    <div className="relative bg-white rounded-2xl shadow-strong p-4 md:p-8">
                                        <div className="aspect-square rounded-xl overflow-hidden">
                                            <img
                                                src={`/media/${feature.image}`}
                                                alt={feature.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl -z-10`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Technical Trust Section */}
                {/* <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        How It Works (Technical Trust)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {techFeatures.map((tech, index) => {
                            const Icon = tech.icon;
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-secondary" />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-2">
                                        {tech.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Solution;

