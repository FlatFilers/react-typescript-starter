const path = require('path')
const webpack = require('webpack')
const DotEnv = require('dotenv-webpack')

const PORT = parseInt(process.env.PORT || '8080', 10)

module.exports = function () {
  return {
    stats: {
      errorDetails: true,
      colors: true,
      modules: true
    },
    entry: 'src/mount',
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
      publicPath: process.env.DEPLOY_URL || '/'
    },
    bail: true,
    devServer: {
      contentBase: 'public',
      historyApiFallback: true,
      liveReload: true,
      hot: true,
      port: PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DotEnv({ systemvars: true })
    ],
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.(svg|otf|png)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.css$/i,
          use: ['css-loader']
        }
      ]
    },
    resolve: {
      alias: {
        src: path.resolve('src')
      },
      extensions: ['.tsx', '.js']
    }
  }
}
