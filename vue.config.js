const config = {};

if (process.env.NODE_ENV !== 'production') {
  config.devServer = {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  };
}

module.exports = config;
