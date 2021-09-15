var webpack = require('webpack');
require('dotenv').config({ path: './.env' }); 
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object")
        }),
        new webpack.DefinePlugin({
            'process.env':{
              'STRIPE_SECRET_KEY': JSON.stringify(''),
              'STRIPE_PUBLISHABLE_KEY': JSON.stringify('')
            }
          }),
          new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
          }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
     },
     performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}