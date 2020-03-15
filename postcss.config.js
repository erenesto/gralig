module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 2
    })
  ]
};
