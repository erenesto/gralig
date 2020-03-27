let plugins = [
  require("autoprefixer")({
    grid: true
  }),
  require("postcss-safe-parser"),
  require("postcss-preset-env")({
    stage: 2
  })
];

// if (process.env.NODE_ENV == 'production') plugins.push(require("postcss-csso"))
if (process.env.NODE_ENV == "production")
  plugins.push(
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  );

module.exports = {
  plugins
};
