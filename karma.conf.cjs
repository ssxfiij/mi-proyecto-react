// karma.conf.cjs
const webpack = require('webpack');
const path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/setupTests.js',
      'src/components/**/*.test.jsx'
    ],
    preprocessors: {
      'src/components/**/*.test.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
          path: require.resolve('path-browserify'),
          process: require.resolve('process/browser'),
          util: require.resolve('util/'),
          fs: false,
        },
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { esmodules: true } }],
                  '@babel/preset-react',
                ],
              },
            },
          },
        ],
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
      stats: 'errors-only',
    },
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false,
    client: {
      captureConsole: true,
      clearContext: false,
    },
    browserNoActivityTimeout: 60000,
    browserDisconnectTolerance: 2,
    concurrency: Infinity,
  });
};
