const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: 'app/public/index.html',
  filename: './index.html',
});

module.exports = [{
  entry: './server/index.ts',
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
},
// Client
{
  entry: './app/index.tsx',
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  // },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/app'),
  },
  plugins: [htmlPlugin],
}];