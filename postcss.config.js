module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          reduceIdents: false,
          autoprefixer: false,
          zindex: false,
          normalizeWhitespace: false,
        },
      ],
    }),
  ],
};
