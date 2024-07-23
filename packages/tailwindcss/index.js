const postcss = require('postcss');
const postcssrc = require('postcss-load-config')

module.exports = function (eleventyConfig) {
    eleventyConfig.addTemplateFormats('css');

    eleventyConfig.addExtension('css', {
        outputFileExtension: 'css',
        compile: async (content, path) => {
            return async () => {
                let output = await postcssrc({}, __dirname).then(({ plugins, options }) => {
                    return postcss(plugins)
                        .process(content, { ...options, from: path })
                })

                return output.css;
            }
        }
    });
};
