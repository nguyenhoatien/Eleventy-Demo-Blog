
const pluginPostCSS = require('@package/postcss');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginPostCSS);

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
        }
    }
};
