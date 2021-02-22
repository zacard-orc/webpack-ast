/*
 * @authror : Leiyin.lin
 * @Date : 2021-02-21
 * @Timestamp : 2021-02-21 17:18
 * @Project : webpack-ast
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : webpack.config.js
 * @Description : ...
 */


const path = require('path');
const ProgressPlugin = require('progress-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // library: 'ast',
    // libraryTarget: 'umd',
    // umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: '/node_modules/',
      },
    ],
  },
  stats: {
    colors: true,
  },
  plugins:[
    // new ProgressPlugin(true)
  ],
  devtool: 'source-map'
};
