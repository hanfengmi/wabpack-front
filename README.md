# wabpack-front
wabpack构建前端项目   
##### 1.cnpm init
>初始化项目    
>回车---   
>得到package.json   

##### 2.webpack配置

    npm install webpack --save-dev
>在目录下添加webpack.config.js,就是webpack的配置文件

##### 3.安装依赖

    npm install style-loader css-loader sass-loader node-sass --save-dev
>加了--save-dev最后这些依赖包会自动添加到package.json文件里面去的

##### 4.添加文件
>目录结构如下   
> |——index.html
> |——index.js
> |——node_modules
> |——package,json
> |——test.scss
> |——webpack.config.js

##### webpack.config.js

    const path = require('path'); // 导入路径包
    module.exports = {
      entry: "./index.js", // 入口文件

      // 输出文件 build下的bundle.js
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
      },

      // 使用loader模块
      module: {
        loaders: [
          {test: /\.css$/, loader: "style-loader!css-loader"}
        ],
        loaders: [
          {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
        ]
      }
    };

##### 运行webpack

    webpack
>根目录下生成build目录


# loader
### 介绍
>loader是webpack中一个重要的概念，它是指用来将一段代码转换成另一段代码的webpack插件
> webpack实际上只能处理JS文件，如果需要使用一些非JS文件（scss），就需要将它转换成JS再require进来

### 用途
>让webpack自动将非js文件编译成js再将js文件插入到DOM中

### 用法
>例如 coffee-loader -> 在使用.coffee文件时，自动转化成js文件

    var coffee = require('coffee!./text.coffee')
    coffee.ok();
require参数最前面加了coffee!，这个表示使用coffee-loader来处理文件内容

### 串联
>require('style!css!./style.css');
> 将style.css文件内容先经过css-loader处理，然后经过style-loader处理

### 用法（灵活使用）

    module: {
    // loaders是一个数组，每个元素都用来指定loader
      loaders: [{
        test: /\.jade$/,    //test值为正则表达式，当文件路径匹配时启用
        loader: 'jade',    //指定使用什么loader，可以用字符串，也可以用数组
        exclude: /regexp/, //可以使用exclude来排除一部分文件

        //可以使用query来指定参数，也可以在loader中用和require一样的用法指定参数，如`jade?p1=1`
        query: {
          p1:'1'
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'    //loader可以和require用法一样串联
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']    //也可以用数组指定loader
      }]
    }
