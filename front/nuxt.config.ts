export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en",
            },
            link: [
                { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
            ],
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { name: "description", content: "My app description" },
            ],
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    devtools: { enabled: false },
    vite: {
        server: {
            watch: {
                ignored: ["**/node_modules/**", "**/.git/**"],
            },
        },
    },
    i18n: {
        locales: [
            {
                code: "fr",
                iso: "fr-FR",
                name: "🇫🇷 FR",
                file: "fr.json",
            },
            {
                code: "en",
                iso: "en-US",
                name: "🇺🇸 EN",
                file: "en.json",
            },
        ],
        langDir: "locales/", // Directory for translation files
        defaultLocale: "fr",
    },
});
