var htmlwp = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports={
  entry:'./src/main.js',  //指定打包的入口文件
  output:{
    // path: path.resolve(__dirname, 'dist'),
  	path : __dirname+'/dist',  // 注意：webpack1.14.0 要求这个路径是一个绝对路径
  	filename:'build.js'
  },
module: {
     rules: [
       {
         test: /\.css$/, //打包css文件
         use: ['style-loader','css-loader'],
        // loader:'style-loader!css-loader'
       },
       {
        test: /\.scss$/,  //打包scss文件
        // loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 
         loader:'style-loader!css-loader!sass-loader'
      },
       {
        test: /\.less$/,  //打包scss文件
        // loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 
         loader:'style-loader!css-loader!sass-loader!less-loader'
      }, 
      {  
        test: /\.(jpeg|jpg|gif|png|ttf)$/,  
        use: [  
            {  
                loader: 'url-loader',  
                options: {  
                    limit: '20480' //小于20k 打包到build.js里面
                }  
            },  
        ]  
    },
    {test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/},
    {test: /\.vue$/,loader: 'vue-loader'} 
     ]
   },
  //  babel:{    
  //   presets:['es2015', 'stage-0'],  // 配置将es6语法转换成es5语法
  //   plugins:['transform-runtime']
  // },
   plugins:[
       new htmlwp({
         title: '首页',  //生成的页面标题<head><title>首页</title></head>
         filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
         template: 'index.html'//'template.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
       }),
       new VueLoaderPlugin(),
   ]
}