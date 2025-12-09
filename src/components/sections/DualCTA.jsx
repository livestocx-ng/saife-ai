import React from 'react';
import { Download, TrendingUp, CheckCircle, Smartphone, Globe } from 'lucide-react';
import Button from '../ui/Button';

const DualCTA = () => {
    return (
        <section className="section-padding bg-white" id="support">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-display-md md:text-display-lg mb-6">
                        Join the Movement to End Digital Violence
                    </h2>
                </div>

                {/* Dual CTA Blocks */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* CTA Block 1: FOR USERS */}
                    <div className="relative overflow-hidden rounded-3xl bg-primary p-1">
                        <div className="bg-primary rounded-3xl p-8 md:p-10 text-white relative z-10">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Download className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4">
                                    Get Protected Today
                                </h3>

                                <p className="text-xl mb-8 leading-relaxed">
                                    Download Saife AI for free and join 6,000+ women and girls
                                    browsing safely across social media.
                                </p>

                                <Button
                                    variant="secondary"
                                    icon="download"
                                    className="!bg-white !text-primary hover:!bg-gray-100 !border-0 mb-6 w-full sm:w-auto justify-center"
                                    href="https://drive.google.com/file/d/1EK9aWxXKVvLj2d1oyOTY637YjApuhZ34/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Now
                                </Button>

                                {/* Platform Badges */}
                                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/20">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Smartphone className="w-4 h-4" />
                                        <span>iOS & Android</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Globe className="w-4 h-4" />
                                        <span>Browser Extension</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Free Forever</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Block 2: FOR INVESTORS/PARTNERS */}
                    <div className="relative overflow-hidden rounded-3xl bg-secondary p-1">
                        <div className="bg-secondary rounded-3xl p-8 md:p-10 text-white relative z-10">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4">
                                    Help Us Scale to 100,000 Users
                                </h3>

                                <p className="text-xl mb-8 leading-relaxed">
                                    We`re seeking $150,000 in funding to expand across Africa and Asia.
                                    Partner with us to build a continental protection infrastructure.
                                </p>

                                <Button
                                    variant="primary"
                                    icon="arrow"
                                    className="!bg-white !text-secondary hover:!bg-gray-100 mb-6 w-full sm:w-auto justify-center"
                                >
                                    Support Our Scale
                                </Button>

                                {/* Impact Stats */}
                                <div className="space-y-3 pt-6 border-t border-white/20">
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Reach 100,000 protected users in 12 months</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Block 30M+ harmful content impressions</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Deploy to 300+ schools across Africa & Asia</span>
                                    </div>
                                </div>

                                {/* Sub Link */}
                                <div className="mt-6">
                                    <a
                                        href="#schools"
                                        className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
                                    >
                                        For Schools & Institutions →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="text-center mt-12 text-gray-600">
                    <p className="text-lg">
                        Already protecting <span className="font-bold text-gray-900">6,000+ users</span> with{' '}
                        <span className="font-bold text-gray-900">145,000+ content videos</span> blocked monthly.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DualCTA;

