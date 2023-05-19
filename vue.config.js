module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  // 配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.mxnzp.com",
      },
      "/epidemic-api":{
        target: "https://c.m.163.com/ug",
        pathRewrite:{
          '^/epidemic-api' : '/api'
        }
      },
      "/one-ming" : {
        target:"https://api.wer.plus",
        pathRewrite:{
          '^/one-ming' : '/api'
        }
      }
    },
    open:false,
  },
};
