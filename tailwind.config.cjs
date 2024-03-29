const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            primary: ["Roboto", ...fontFamily.sans],
            heading: ["Roboto", ...fontFamily.sans],
        },
        extend: {
            colors: {
                primary: {
                    50: "hsla(var(--tw-color-primary-50), <alpha-value>)",
                    100: "hsla(var(--tw-color-primary-100), <alpha-value>)",
                    200: "hsla(var(--tw-color-primary-200), <alpha-value>)",
                    300: "hsla(var(--tw-color-primary-300), <alpha-value>)",
                    400: "hsla(var(--tw-color-primary-400), <alpha-value>)",
                    500: "hsla(var(--tw-color-primary-500), <alpha-value>)",
                    // 600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
                    // 700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
                    // 800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
                    // 900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
                },
                dark: {
                    0: "#000",
                    1: "#333",
                },
                screens: {
                    rn: "370px",
                },
            },
            keyframes: {
                slideUp: {
                    "0%,50%": { transform: "translateY(100%)" },
                    "50%,100%": { transform: "translateY(0)" },
                },
                slideDown: {
                    "100%,50%": { transform: "translateY(100%)" },
                    "50%,0%": { transform: "translateY(0)" },
                },
            },
            animation: {
                slideUp: "slideUp 1s both",
                slideDown: "slideDown 1s both",
            },
        },
    },
    plugins: [],
};
