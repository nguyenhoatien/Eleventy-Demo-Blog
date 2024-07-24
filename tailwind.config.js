/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./_includes/**/*.{html,js,njk,md}",
        "./content/**/*.{html,js,njk,md}"
    ],
    theme: {
        extend: {}
    },
    plugins: [],
    corePlugins: {
        preflight: false
    }
};

