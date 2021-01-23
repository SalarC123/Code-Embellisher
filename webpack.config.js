const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './Novus.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
            {
                test: /\.png$/,
                use: {
                    loader:"file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "Images"
                    }
                },
            },
        ],
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