import { useState, useEffect } from 'react';
import { SkipForward, Eye, Ban, Shield, Brain, Lock, MessageCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const FeatureCarousel = ({ feature }) => {
    const images = [feature.image, feature.image2].filter(Boolean);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="aspect-square rounded-xl overflow-hidden relative">
            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={`/media/${img}`}
                    alt={`${feature.title} ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                />
            ))}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 shadow-sm ${
                                idx === currentIndex ? 'bg-primary' : 'bg-white/70 hover:bg-white'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

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
            image: 'saife_ai5.jpg',
            image2: 'saife_ai66.jpg',
        },
    ];

    const techFeatures = [
        { icon: Brain, text: 'Computer Vision detects violent/sexual visual content' },
        { icon: MessageCircle, text: 'NLP toxicity classifiers analyze text, captions, and audio' },
        { icon: Shield, text: 'Multi-lingual datasets for local contexts (Hausa, Swahili, Hindi)' },
        { icon: Lock, text: 'Privacy-first: On-device inference, no data sold or shared' },
    ];

    return (
        <section className="section-padding bg-cream" id="how-it-works">
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
                                    <div className="relative bg-cream-card rounded-2xl shadow-strong p-4 md:p-8">
                                        <FeatureCarousel feature={feature} />
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

