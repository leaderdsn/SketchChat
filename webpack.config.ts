import * as path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration & Record<string, any> = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js'
  },
  target: ['web', 'es2015'],
  resolve: {
    extensions: ['.tsx','.ts','.js'],
    alias: {
      '~src': path.resolve(__dirname, './src'),
    },
  },
  devServer: {
    liveReload: true,
    compress: true,
    port: 3000,
    hot: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { 
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'assets'),
          to: './assets',
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css',
    }),
  ],
}; 

export default config;