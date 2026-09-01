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
                    DEFAULT: '#FF007F',
                    light: '#FF5CA8',
                    dark: '#C60063',
                },
                secondary: {
                    DEFAULT: '#F0518E',
                    light: '#F98FB6',
                    dark: '#B93068',
                },
                tertiary: {
                    DEFAULT: '#D98324',
                    light: '#E9A85A',
                    dark: '#A6631A',
                },
                success: {
                    DEFAULT: '#4E9F3D',
                    light: '#7BC96F',
                },
                warning: {
                    DEFAULT: '#E0A100',
                    light: '#F5C542',
                },
                danger: {
                    DEFAULT: '#EF4444',
                    light: '#F87171',
                },
                cream: {
                    DEFAULT: '#FBF6EE',
                    card: '#FCF3EA',
                    dark: '#F3E8DA',
                    deep: '#1F1A17',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                mono: ['Inter', 'monospace'],
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

