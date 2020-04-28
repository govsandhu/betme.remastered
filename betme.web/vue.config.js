module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/partials/_variables.scss";'
      }
    }
  }
};
