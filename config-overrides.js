// config-overrides.js
module.exports = function override(config, env) {
  // Find the index of the rule that handles CSS files
  const cssRuleIndex = config.module.rules.findIndex(rule =>
    rule.oneOf && rule.oneOf.some(r => r.test && r.test.test('.css'))
  );

  if (cssRuleIndex > -1) {
    const cssRule = config.module.rules[cssRuleIndex];

    // Modify the css-loader options to enable CSS Modules
    cssRule.oneOf.forEach(rule => {
      if (rule.test && rule.test.test('.css')) {
        rule.use.forEach(loader => {
          if (loader.loader && loader.loader.includes('css-loader')) {
            loader.options = {
              ...loader.options,
              modules: {
                localIdentName: '[hash:base64:5]', // Customize class name mangling
              },
            };
          }
        });
      }
    });
  }

  return config; // Return the modified config
};
