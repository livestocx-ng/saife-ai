import React, { useEffect, useRef, useState } from 'react';

const StatCard = ({ number, label, sublabel, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                const duration = 2000;
                const steps = 60;
                const increment = number / steps;
                let current = 0;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        setCount(number);
                        clearInterval(counter);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, duration / steps);

                return () => clearInterval(counter);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [isVisible, number, delay]);

    const formatNumber = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
        return num.toString();
    };

    return (
        <div
            ref={ref}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="stat-number mb-2">
                {isVisible ? formatNumber(count) : '0'}+
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                {label}
            </div>
            {sublabel && (
                <div className="text-sm md:text-base text-gray-600">
                    {sublabel}
                </div>
            )}
        </div>
    );
};

export default StatCard;

