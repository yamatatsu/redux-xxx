const production = process.env.NODE_ENV === 'production'
const webpack = require('webpack')
const path = require('path')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`,
  }),
]
if (production) plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }))

module.exports = {
  entry: path.join(__dirname, '/src/app.js'),
  resolve: { root: [path.join(__dirname, '/src')] },
  output: {
    path: path.join(__dirname, '/js'),
    filename: 'bundle.js',
    publicPath: 'js/',
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
    ],
  },
  plugins,
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
  },
}
