module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-sort-media-queries'),
    require('autoprefixer'),
  ],
});
