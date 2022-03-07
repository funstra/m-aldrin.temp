const minify = require("html-minifier-terser").default;

/** @param {import("@11ty/eleventy/src/UserConfig")} config */
module.exports = config => {
  config.addWatchTarget("src/scss/**/*.scss");
  config.addWatchTarget("src/js/**/*.js");

  config.addWatchTarget("src/assets");
  config.addPassthroughCopy("src/assets");

  config.addFilter(
    "slajs",
    /**
     * @param {Array} arr
     * @param {number} s
     * @param {number} e
     */
    (arr, s, e) => arr.slice(s ?? 0, e ?? arr.length)
  );

  config.addTransform("htmlmin", async function (content, outputPath) {
    console.log('HELLO MINI?')
    if (!process.env.FUNSTRA_MODE) {
      return content;
    }
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = await minify.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        customAttrCollapse: /d/
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
