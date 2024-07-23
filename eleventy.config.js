
const pluginPostCSS = require('@package/postcss');
const pluginESBuild = require('@package/esbuild');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginPostCSS);
    eleventyConfig.addPlugin(pluginESBuild);

    eleventyConfig.addPassthroughCopy({
        "./public/": "/",
    });

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
        }
    }
};
