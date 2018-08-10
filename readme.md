# vue-douban-app
Vue+Webpack打造豆瓣应用。
项目开始：
```
# 初始化项目
npm init

# 安装环境
npm i webpack@^3.10.0 vue vue-loader@13.6.0 --save //这里暂不区分 devDepandency 和 Depandency。

# 安装指定版本的webpack
npm i webpack@3.11.0 --save

# 根据错误提示，安装下面这两个包
npm i css-loader vue-template-compiler --save

初始化完成后，自动生成的 package.json文件的内容如下：

{
  "name": "yjdb",
  "version": "1.0.0",
  "description": "模仿豆瓣网app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "css-loader": "^0.28.11",
    "vue-loader": "^13.6.0",
    "vue-template-compiler": "^2.5.16",
    "webpack": "^3.11.0"
  },
  "devDependencies": {
    "vue": "^2.5.16"
  }
}
```
###  webpack配置：加载.vue文件

新建文件`src/app.vue`，我们可以在这里面写代码。格式如下：

```html
<template>
  
</template> 

<script>
export default {};
</script>

<style>

</style>
```

上方代码中，我们在`<template>`标签中写html标签。而`<script>`和`<style>`标签里的内容只针对这个vue文件有效。


我们来举个例子。

（1）新建文件`src/app.vue`：

```
html
<template>
  <div class="div1">{{myText}}</div>
</template> 

<script>
export default {
  data() {
    return {
      myText: 'smyhvae'
    };
  }
};
</script>

<style>
.div1 {
  color: red;
}
</style>

```


上面这个`app.vue`组件，是无法在浏览器中直接运行的，而是要通过`index.js`来使用它。这就需要通过 webpack 来配置，我们继续来看步骤。


（2）新建文件`src/.index.js`：

```javascript
import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root); //挂在到 root 节点
```

我们在这里引入 vue 组件。


（3）新建文件`webpack.config.js`：（配置入口文件和输出路径，并配置 vue的loader）


```javascript
const path = require('path')//通过path获取绝对路径，更保险

module.exports = {
    //entry：入口文件
    entry: path.join(__dirname, 'src/index.js'), // __dirname 指的是根路径。将根路径、相对路径进行拼接，形成绝对路径
    //output：编译输出
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist') // 指定输出路径


    },
    module: {
        rules: [
            {
                // test的作用是：检测文件类型
                test: /\.vue$/,  //通过`vue-loader`工具，让 webpack 支持 .vue 文件的编译
                loader: 'vue-loader'
            }
        ]
    }

}  
 

```

(4)在package.json中加一行：

```json
    "build": "webpack --config webpack.config.js"
```


项目运行：

```
npm install 
npm run dev
```

