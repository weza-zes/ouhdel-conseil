/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./nuxt.config.{js,ts}",
        "./app/**/*.{vue,js,ts,jsx,tsx}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                // primary: "#0057E1",
                // secondary: "#08376B",
                primary: "#08376B",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Sets Inter as default sans font
            },
        },
    },
    plugins: [],
};
