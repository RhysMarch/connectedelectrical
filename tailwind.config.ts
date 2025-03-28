import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
    ],
    theme: {
        extend: {
            animation: {
                sheen: 'sheen 1.5s ease-in-out forwards',
            },
            keyframes: {
                sheen: {
                    '0%': { left: '-100%' },
                    '100%': { left: '150%' },
                },
            },
        },
    },
    plugins: [],
}
export default config
