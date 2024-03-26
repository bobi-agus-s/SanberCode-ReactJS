/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js"],
    theme: {
        fontFamily: {
            header: ['Merienda', 'cursive'],
            default: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: "#0be646",
                'h-primary': "#0cb339",
                secondary: "#f97316",
                'h-secondary': "#e06510",
            }
        },
    },
    plugins: [
        require("flowbite/plugin")
    ],
};
