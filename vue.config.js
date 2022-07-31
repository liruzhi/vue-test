const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false,
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:8090'
  // },
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:8090',
        pathRewrite:{'^/atguigu':''},
        // ws: true,//用于支持websocket  不写默认为true
        // changeOrigin: true  //不写默认为true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
