var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'app/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'public')
    ],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Redux Seed',
      favicon: 'public/favicon.ico',
      filename: 'index.html',
      template: 'index.tmpl.html',
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('style.css', {allChunks: false}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
      mangle: {screw_ie8: true, keep_fnames: true}
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}

// https://github.com/unicorn-standard/starter-kit/blob/master/webpack.config.js
