import Button from '../ui/Button';
import { Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-cream">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cream to-secondary/10 -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                                Trusted by 7000+ Users
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
                            Real-Time Protection from Harmful <span className="gradient-text">Social Media</span> for Youth Mental Wellbeing.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            SaifeAI automatically detects, filters, and blocks harmful content
                            on social media before you see it.
                        </p>

                        <p className="text-lg text-gray-700">
                            No more triggering videos. No more toxic comments. No more waiting for
                            platforms to act. Saife AI works in real-time on TikTok, Instagram,
                            YouTube, Facebook and Snapchat protecting you at the moment of exposure.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 pt-4">
                            {/* App Download Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    className="justify-center flex-1 sm:flex-none"
                                    href="https://play.google.com/store/apps/details?id=com.girlified.girlified"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg viewBox="0 0 512 512" className="w-5 h-5 mr-2" fill="currentColor">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                    </svg>
                                    Google Play
                                </Button>

                                <Button
                                    variant="secondary"
                                    className="justify-center flex-1 sm:flex-none"
                                    href="https://apps.apple.com/app/saifeai/id6760655286"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg viewBox="0 0 384 512" className="w-5 h-5 mr-2" fill="currentColor">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                    </svg>
                                    App Store
                                </Button>
                            </div>

                            {/* Additional Actions */}
                            {/* <div className="flex">
                                <Button variant="secondary" icon="arrow" className="justify-center w-full sm:w-auto">
                                    Support Our Scale
                                </Button>
                            </div> */}
                        </div>

                        {/* Stats Bar */}
                        {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                            <div className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                                <div>
                                    <div className="font-bold text-gray-900">6,000+</div>
                                    <div className="text-sm text-gray-600">Protected Users</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                                <div>
                                    <div className="font-bold text-gray-900">45,000+</div>
                                    <div className="text-sm text-gray-600">Videos Blocked Monthly</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                                <div>
                                    <div className="font-bold text-gray-900">4.6/5</div>
                                    <div className="text-sm text-gray-600">User Rating</div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Visual/Demo */}
                    <div className="relative animate-fade-in">
                        <div className="relative z-10">
                            {/* Phone Mockup */}
                            <div className="relative mx-auto w-full max-w-[300px]">
                                {/* Phone Frame with Background Image */}
                                {/* Phone Frame */}
                                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-strong">
                                    {/* Phone Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                                    {/* Phone Screen */}
                                    <div className="relative rounded-[2.5rem] overflow-hidden">
                                        <div
                                            className="relative w-full aspect-[3/5] bg-cover bg-center bg-no-repeat"
                                            style={{ backgroundImage: 'url(/media/phone-mockup.jpg)' }}
                                        >
                                        </div>
                                    </div>

                                    {/* Home Indicator */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                                </div>

                                {/* Floating Stats */}
                                {/* <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-strong p-4 animate-scale-in">
                                    <div className="text-2xl font-bold gradient-text">45K+</div>
                                    <div className="text-xs text-gray-600">Monthly Blocks</div>
                                </div> */}

                                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-strong p-4 animate-scale-in" style={{ animationDelay: '200ms' }}>
                                    <div className="text-2xl font-bold gradient-text">4.6★</div>
                                    <div className="text-xs text-gray-600">User Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

