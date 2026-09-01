import Button from '../ui/Button';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Individual',
            price: '$3',
            duration: '/ month',
            description: 'Essential protection for personal social media accounts.',
            features: [
                'Basic toxic comment filtering',
                '1 Social Media Account',
                'Standard Support',
                'Cancel anytime'
            ],
            buttonText: 'Get Started',
            buttonVariant: 'primary',
            badge: null,
            badgeColor: '',
            accentColor: 'bg-primary',
            buttonClasses: 'bg-primary-light hover:bg-primary text-gray-900',
            terms: 'Perfect for personal accounts and minimal engagement.'
        },
        // {
        //     name: 'Institutions',
        //     price: '$100',
        //     duration: '/ month',
        //     description: 'Advanced AI protection for schools, NGOs, and organizations.',
        //     features: [
        //         'Advanced AI filtering & sentiment analysis',
        //         'Up to 10 Social Media Accounts',
        //         'Priority 24/7 Support',
        //         'Analytics Dashboard',
        //         'Cancel anytime'
        //     ],
        //     buttonText: 'Get Started',
        //     buttonVariant: 'secondary',
        //     badge: 'Most Popular',
        //     badgeColor: 'bg-secondary-light text-gray-900',
        //     accentColor: 'bg-secondary',
        //     buttonClasses: 'bg-secondary-light hover:bg-secondary text-gray-900',
        //     terms: 'Protect your community with advanced moderation.'
        // },
        {
            name: 'API & Enterprise',
            price: 'Custom',
            duration: '',
            description: 'Complete security suite and API access for developers and large teams.',
            features: [
                'Custom filtering rules & automation',
                'Unlimited Social Media Accounts',
                'Dedicated Account Manager',
                'API Access & Integrations',
                'Custom SLA'
            ],
            buttonText: 'Contact Us',
            buttonVariant: 'primary',
            badge: null,
            badgeColor: '',
            accentColor: 'bg-warning',
            buttonClasses: 'bg-warning-light hover:bg-warning text-gray-900',
            terms: 'For agencies, large scale deployments, and developers.'
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-cream-deep text-white font-sans">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                        Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">pricing</span>
                    </h2>
                    <p className="text-xl text-gray-300">
                        Choose the plan that fits your needs and start protecting your digital space today.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div 
                            key={plan.name} 
                            className="flex-1 min-w-[300px] max-w-md bg-white/5 rounded-2xl p-6 flex flex-col h-full hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 shadow-lg"
                        >
                            {plan.badge ? (
                                <div className={`inline-block px-3 py-1 rounded-md text-sm font-bold mb-4 w-max ${plan.badgeColor}`}>
                                    {plan.badge}
                                </div>
                            ) : (
                                <div className="h-7 mb-4"></div> /* Spacer for alignment */
                            )}
                            
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                                    {/* Small icon representing logo */}
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-gray-200">Saife AI</span>
                            </div>
                            
                            <h3 className="text-3xl font-bold mb-2 font-display text-white">{plan.name}</h3>
                            <p className="text-gray-300 mb-6 min-h-[48px]">{plan.description}</p>
                            
                            <div className="mb-6 pb-6 border-b border-gray-700">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400 font-medium">{plan.duration}</span>
                                </div>
                            </div>
                            
                            <ul className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0">
                                            <Check className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-auto">
                                <button className={`w-full py-3 px-6 rounded-full font-bold text-lg transition-transform hover:scale-105 ${plan.buttonClasses}`}>
                                    {plan.buttonText}
                                </button>
                                <p className="text-xs text-gray-400 mt-4 text-center">
                                    {plan.terms}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
