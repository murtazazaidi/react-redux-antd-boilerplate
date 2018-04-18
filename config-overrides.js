const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
  // To modify Antd theme
  // config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
  // config = rewireLess.withLoaderOptions({
  //   modifyVars: { 
  //     "@primary-color": "#99c44e",
  //     "@layout-header-background": "#2d2d2d"
  //   },
  // })(config, env);
  return config;
};
