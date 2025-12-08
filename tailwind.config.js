/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#EC4899',
                    light: '#F9A8D4',
                    dark: '#BE185D',
                },
                secondary: {
                    DEFAULT: '#A855F7',
                    light: '#C084FC',
                    dark: '#7C3AED',
                },
                tertiary: {
                    DEFAULT: '#14B8A6',
                    light: '#2DD4BF',
                    dark: '#0F766E',
                },
                success: {
                    DEFAULT: '#10B981',
                    light: '#34D399',
                },
                warning: {
                    DEFAULT: '#F59E0B',
                    light: '#FBBF24',
                },
                danger: {
                    DEFAULT: '#EF4444',
                    light: '#F87171',
                },
            },
            fontFamily: {
                sans: ['Philosopher', 'system-ui', 'sans-serif'],
                display: ['Roboto', 'sans-serif'],
                mono: ['Philosopher', 'monospace'],
            },
            fontSize: {
                'display-lg': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
                'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
                'display-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            boxShadow: {
                'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
                'medium': '0 8px 16px rgba(0, 0, 0, 0.1)',
                'strong': '0 12px 24px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}

