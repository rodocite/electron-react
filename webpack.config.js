var webpack = require('webpack');
module.exports = {
  entry: {
    app: ['./app/react/entry.jsx'],
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
   loaders: [
     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.css$/, loader: 'style-loader!css-loader' },
     { test: /\.less$/, loader: 'style-loader!css-loader!sass-loader'}
   ]
  }
}
