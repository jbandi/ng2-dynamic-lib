var webpack = require('webpack');
var path = require('path');

// Webpack Config
var webpackConfig = {

  entry: {
    'vendor': './src/vendor.ts',
    'lib': ['example-lib'],
    'main': './src/main.ts'
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    pathinfo: true
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['main', 'lib', 'vendor'], minChunks: Infinity })
  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  }

};

module.exports = webpackConfig;
