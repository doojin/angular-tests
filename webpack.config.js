let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

const OUT_PATH = path.resolve(__dirname, 'dist');

module.exports = [{
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: OUT_PATH
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/app.css',
            to: './styles.css'
        }])
    ]
}];