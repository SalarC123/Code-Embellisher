const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './Novus.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'Novus.html',
            template: './Novus.html'
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