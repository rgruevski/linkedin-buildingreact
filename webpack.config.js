const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
    plugins: 
      new ReactRefreshWebpackPlugin(),
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      ],
    },
  };
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/env"]
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        static: { directory: path.join(__dirname, "public/") },
        compress: true,
        port: 3000,
        devMiddleware: { publicPath: 'http://localhost:3000/dist/' }
    }
};