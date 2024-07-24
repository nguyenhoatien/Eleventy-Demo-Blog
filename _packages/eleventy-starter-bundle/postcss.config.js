module.exports = {
    map: process.env.NODE_ENV === 'development' ? { inline: true } : false,
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: process.env.NODE_ENV === 'production' ? {} : false
    },
}