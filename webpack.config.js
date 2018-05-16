var path = require('path');
var Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './app/index.js',
    mode:  'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    // add the babel-loader and presets
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ['env', 'react'] }
                }]
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
    // end of babel-loader
};