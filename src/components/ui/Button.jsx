import { ArrowRight, Download } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    icon,
    iconPosition = 'right',
    className = '',
    href,
    ...props
}) => {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        gradient: 'btn-gradient',
    };

    const icons = {
        arrow: <ArrowRight className="w-5 h-5" />,
        download: <Download className="w-5 h-5" />,
    };

    const IconComponent = icon ? icons[icon] : null;

    const content = (
        <>
            {iconPosition === 'left' && IconComponent}
            {children}
            {iconPosition === 'right' && IconComponent}
        </>
    );

    // If href is provided, render as anchor tag
    if (href) {
        return (
            <a href={href} className={`${variants[variant]} ${className}`} {...props}>
                {content}
            </a>
        );
    }

    // Otherwise render as button
    return (
        <button className={`${variants[variant]} ${className}`} {...props}>
            {content}
        </button>
    );
};

export default Button;

