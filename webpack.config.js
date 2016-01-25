var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './app/react/entry.jsx'],
  },
  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },
  module: {
   loaders: [
     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.css$/, loader: 'style-loader!css-loader' },
     { test: /\.less$/, loader: 'style-loader!css-loader!sass-loader'}
   ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
 ]
}
