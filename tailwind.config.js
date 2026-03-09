/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#122D4F',
                    secondary: '#326586',
                    background: '#F4E9D4',
                },
            },
        },
    },

    plugins: [],
}