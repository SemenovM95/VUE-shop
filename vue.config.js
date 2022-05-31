const path = require('path');

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/style.sass"',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        mixins: path.join(__dirname, 'src/mixins'),
        components: path.join(__dirname, 'src/components'),
        views: path.join(__dirname, 'src/views'),
      },
    },
  },
};
