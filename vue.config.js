const config = {};

if (process.env.NODE_ENV !== 'production') {
  config.devServer = {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  };
}

module.exports = config;
