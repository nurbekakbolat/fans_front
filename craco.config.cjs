const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        login: path.resolve(__dirname, 'src', 'login.tsx'),
        register: path.resolve(__dirname, 'src', 'register.tsx'),
        user: path.resolve(__dirname, 'src', 'user.tsx'),
      };
      webpackConfig.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      };
      return webpackConfig;
    },
  },
  eslint: {
    enable: true,
    mode: 'file',
  },
};
