import Button from '../ui/Button';
import { Shield, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/5 to-secondary/5 -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">
                                Trusted by 1600+ Users
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                            Real-Time Protection from{' '}
                            <span className="gradient-text">Online Violence.</span>
                            <br />
                            Built for Women & Girls.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Saife AI automatically detects, filters, and blocks harmful content
                            on social media before you see it. 
                        </p>

                        <p className="text-lg text-gray-700">
                            No more triggering videos. No more toxic comments. No more waiting for
                            platforms to act. Saife AI works in real-time on TikTok, Instagram,
                            YouTube, Facebook and Snapchat protecting you at the moment of exposure.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                variant="primary"
                                icon="download"
                                className="justify-center"
                                href="https://drive.google.com/file/d/1EK9aWxXKVvLj2d1oyOTY637YjApuhZ34/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Now
                            </Button>
                            <Button variant="secondary" icon="arrow" className="justify-center">
                                Support Our Scale
                            </Button>
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
                                    <div className="font-bold text-gray-900">145,000+</div>
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
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-strong p-4 animate-scale-in">
                                    <div className="text-2xl font-bold gradient-text">145K+</div>
                                    <div className="text-xs text-gray-600">Monthly Blocks</div>
                                </div>

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

