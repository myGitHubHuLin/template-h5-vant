const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin') // gzip压缩

function resolve (dir) {
  return path.join(__dirname, dir)
}
// 网站配置
const configSite = require('./config')
// cdn 别名设置
const externals = {}

module.exports = {
  lintOnSave: true, // eslint检测 按需开启
  publicPath: './', // 资源全局路径前缀
  assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 输出文件目录
  outputDir: 'dist',
  // webpack-dev-server 相关配置
  devServer: {
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8088,
    // 禁用host验证
    disableHostCheck: true,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        // 开发环境
        target: 'http://127.0.0.1:7001/api',
        // target: 'http://wxapitest1.free.idcfengye.com/api',
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL(设置跨域)
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack () {
    let configNew = {}
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('\n---生产环境---\n')
      console.log(`gzip压缩(需要nginx开启gzip)`)
      configNew.plugins = [
        new CompressionPlugin({
          // filename: "[path].gz[query]",
          // algorithm: "gzip",
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      ]
    }
    return configNew
  },
  chainWebpack (config) {
    // 移除资源预加载(路由懒加载才能正常使用)
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // 配置CDN
    config.plugin('html').tap(args => {
      args[0].cdn = require('./config/cdn')
      args[0].title = configSite.title
      return args
    })
    // 为CND设置导出模块名称
    config.externals(externals)
    // 设置别名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
    // 设置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  css: {
    loaderOptions: {
      sass: {
        // 配置scss 全局样式文件 支持全局变量
        prependData: `
       @import "@/assets/css/common.scss";
     `
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75, // 换算基数(设计稿宽度/10)
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      }
    }
  }
}
