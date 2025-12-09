import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Impact', href: '#impact' },
        { label: 'Roadmap', href: '#roadmap' },
        { label: 'For Partners', href: '#partners' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-display ${isScrolled
                ? 'bg-white shadow-medium py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        <span className="text-xl md:text-2xl font-display font-bold text-gray-900">
                            Saife <span className="gradient-text">AI</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    {/* <div className="hidden lg:flex items-center gap-4">
                        <Button variant="secondary" icon="arrow" href="#support" className="h-6 px-4 text-sm    "    >
                            Support Us
                        </Button>
                        <Button 
                            variant="primary" 
                            icon="download" 
                            className="h-6 px-4 text-sm"
                            href="https://drive.google.com/file/d/1EK9aWxXKVvLj2d1oyOTY637YjApuhZ34/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Now
                        </Button>
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-900"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-strong mt-2 py-6 px-4 rounded-lg mx-4 animate-fade-in">
                        <nav className="flex flex-col gap-4 mb-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-primary font-medium transition-colors py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        {/* <div className="flex flex-col gap-3">
                            <Button 
                                variant="primary" 
                                icon="download" 
                                className="w-full h-4 justify-center"
                                href="https://drive.google.com/file/d/1EK9aWxXKVvLj2d1oyOTY637YjApuhZ34/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Now
                            </Button>
                            <Button variant="secondary" icon="arrow" className="w-full h-4 justify-center">
                                Support Us
                            </Button>
                        </div> */}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

