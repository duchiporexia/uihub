const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.REACT_APP_ENV !== 'prod';

module.exports = {
  entry: {
    entry: './index.web.js',
  },
  output: {
    path: path.join(process.cwd(), './dist-web'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: {
      index: './index.html',
    },
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          'node_modules/react-native-vector-icons',
        ),
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              presets: [
                'module:metro-react-native-babel-preset',
                '@babel/preset-typescript',
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
        exclude: /node_modules[/\\](?!react-native-vector-icons)/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), './index.html'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: !isDev,
        collapseWhitespace: !isDev,
        minifyJS: !isDev,
        minifyCSS: !isDev,
      },
      title: 'React Native H5',
      favicon: path.join(
        process.cwd(),
        './android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png',
      ),
    }),
  ],
  resolve: {
    extensions: ['.web.ts', '.web.tsx', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    },
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
};
