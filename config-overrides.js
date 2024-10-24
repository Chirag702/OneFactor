module.exports = function override(config, env) {
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(subRule => {
        // Consider a more generic test for CSS-like files
        if (subRule.test && /\.(css|module\.css|scss)$/.test(subRule.test.toString())) {
          subRule.use = subRule.use.map(loader => {
            if (loader.loader && loader.loader.includes('css-loader')) {
              return {
                loader: loader.loader,
                options: {
                  ...loader.options,
                  modules: {
                    localIdentName: '[hash:base64:5]', // Customize class name mangling
                  }
                }
              };
            }
            // Return other loaders without modifying them
            return loader;
          });
        }
      });
    }
  });

  return config;
};