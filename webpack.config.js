const HtmlWebPack = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: "development",
    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            },
            
                
        ]
    },
    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: "Mi webpack App 2.0",
            // filename: 'holaMundo.html',
             template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/', to: 'assets/'}
            ]
        })
    ],
    devServer: {
        port: 8080,
        liveReload: true,
        hot: false,
        watchFiles: ['src/**/*.js', 'dist/**/*']
    }

}