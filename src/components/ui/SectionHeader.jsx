import React from 'react';

const SectionHeader = ({ eyebrow, headline, subheadline, centered = true }) => {
    return (
        <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {headline && (
                <h2 className="text-display-md md:text-display-lg mb-4 md:mb-6 text-balance">
                    {headline}
                </h2>
            )}
            {subheadline && (
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                    {subheadline}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;

