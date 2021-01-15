const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './CodeEmbellisher.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'CodeEmbellisher.html',
            template: './CodeEmbellisher.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './about.html',
            // chunks: []
        }),
        new HtmlWebpackPlugin({
            filename: 'feedback.html',
            template: './feedback.html',
            // chunks: []
        }),
    ],
}