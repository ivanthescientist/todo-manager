var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './src/app.module.js',
    output: {
        path: '../public/',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader:"babel" },
            { test: /\.css$/, loader: "style!css"},
            { test: /\.html$/, exclude: /node_modules/, loader:"raw" },
            { test: /\.(ttf|eot|svg|otf)$/, loader: "file" },
            { test: /\.woff(2)?$/, loader: "url?limit=8192&minetype=application/font-woff"},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: false
    })],

    devServer: {
        contentBase: "./src",
        noInfo: false,
        hot: false
    }
};

module.exports = config;