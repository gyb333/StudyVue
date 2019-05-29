
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
        test: /\.(jpeg|jpg|gif|png)$/,  
        use: [  
            {  
                loader: 'url-loader',  
                options: {  
                    limit: '20480' //小于20k 打包到build.js里面
                }  
            },  
        ]  
    }  
     ]
   }
}