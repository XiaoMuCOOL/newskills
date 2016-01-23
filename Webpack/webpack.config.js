var webpack = require('webpack');
var path = require("path");
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
  //插件项
  // plugins: [commonsPlugin],
  //页面入口文件配置
  entry: path.join(__dirname, 'js/main.js'),
  //入口文件输出配置
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: "./dist/",
    filename: '[name]-min.js'
  },
  module: {
    //加载器配置
    //"-loader"其实是可以省略不写的，多个loader之间用“!”连接起来
    loaders: [{
      test: /\.css$/, loader: 'style!css'
    },/*{
      test: /\.js$/, loader: 'babel?harmony'
    },*/{
      test: /\.scss$/, loader: 'style!css!sass'
    },{
      test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192'
    }]
  },
  //其它解决方案配置
  resolve: {
    //查找module的话从这里开始查找:绝对路径
    // root: 'C:/Workspace/XiaoMuCOOL/newskills/Webpack', 
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    // extensions: ['', '.js', '.json', '.scss'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    // alias: {
    //   AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
    //   ActionType : 'js/actions/ActionType.js',
    //   AppAction : 'js/actions/AppAction.js'
    // }
  }
};