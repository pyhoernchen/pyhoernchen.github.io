
// luxon library for date formatting
const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {

  // copy the css directory to the output
  eleventyConfig.addPassthroughCopy('css');
  // watch the css directory for changes
  eleventyConfig.addWatchTarget('css');

  // luxon library for date formatting
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  // set the input and output dir
  return {
    dir: {
      input: '.',
      output: './_site'
    }
  }
}