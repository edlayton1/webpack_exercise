const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             'style_loader',
            //             'css-loader'
            //             //loader:MiniCSSExtractPlugin.loader

            //         }
            //     ]
            // },
            {
                test: /.js$/,
                exclude: /node_module/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin([{
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }]),
        new CopyWebpackPlugin([{
            from: "./src/styles/style.css",
            to: ""
        }])
    ]
};