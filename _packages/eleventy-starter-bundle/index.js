const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginDrafts = require("./eleventy.config.drafts");
const pluginImages = require("./eleventy.config.images");
const pluginPostcss = require("./eleventy.config.postcss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: { tabindex: 0 }
    });
    eleventyConfig.addPlugin(pluginDrafts);
    eleventyConfig.addPlugin(pluginImages);
    eleventyConfig.addPlugin(pluginPostcss);
};
