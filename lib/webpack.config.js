var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
    entry: {
        // 'vendor': './vendor.ts',
        'lib': './index.ts'
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map',
        libraryTarget: 'umd',
        library: 'exampleLib',
        umdNamedDefine: true,
        pathinfo: true
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },

    // externals: {
    //   '@angular/common':'ng.common',
    //   '@angular/core':'ng.core'
    // },

    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({name: ['lib', 'vendor'], minChunks: Infinity})
    // ],

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
            {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
            {test: /\.html$/, loader: 'raw-loader'}
        ]
    },

    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        watchOptions: {aggregateTimeout: 300, poll: 1000}
    }

};

module.exports = webpackConfig;
