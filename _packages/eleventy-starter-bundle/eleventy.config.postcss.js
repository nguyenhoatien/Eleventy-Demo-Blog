const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const postcss = require('postcss');
const postcssrc = require('postcss-load-config')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginBundle, {
        transforms: [
            async function (content) {
                let output = await postcssrc({}, __dirname).then(({ plugins, options }) => {
                    return postcss(plugins)
                        .process(content, { ...options, from: this.page.inputPath })
                })

                return output.css;
            }
        ]
    });
};
