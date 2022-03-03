const minify = require("html-minifier-terser").default;

/** @param {import("@11ty/eleventy/src/UserConfig")} config */
module.exports = config => {
  config.addWatchTarget("src/scss/**/*.scss");
  config.addWatchTarget("src/js/**/*.js");

  config.addWatchTarget('src/assets')
  config.addPassthroughCopy('src/assets')

  config.addTransform("htmlmin", async function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = await minify.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
