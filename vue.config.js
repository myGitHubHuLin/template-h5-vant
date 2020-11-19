/**
 * vue-cli 打包配置文件
 * vue.config.js
 */
const path = require("path");
// gzip压缩
const CompressionPlugin = require("compression-webpack-plugin");
// webpack cdn 插件
const WebpackCdnPlugin = require("webpack-cdn-plugin");

// 构建工具函数
const utils = {
  // 处理路径
  resolve(dir) {
    return path.join(__dirname, dir);
  }
}

// 环境配置
const configEnv = require("./config");

// CDN配置
const configCdn = require("./config/cdn.js");

// 判断是否是生产环境
let isProd = process.env.NODE_ENV == "production" ? true : false;

const config = {
  // eslint检测 默认是开启的
  lintOnSave: true,
  // 资源全局路径前缀
  publicPath: configEnv.publicPath,
  //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  assetsDir: "assets",
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 输出文件目录
  outputDir: "dist",
  // webpack-dev-server 相关配置
  devServer: {
    // 设置主机地址
    host: "0.0.0.0",
    // 设置默认端口
    port: 8088,
    // 禁用host验证
    disableHostCheck: true,
    // 设置代理
    proxy: {
      [configEnv.baseApi]: {
        // 目标 API 地址
        // 开发环境
        target: configEnv.target,
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL(设置跨域)
        changeOrigin: true,
        pathRewrite: {
          [`^${configEnv.baseApi}`]: "",
        },
      },
    },
  },
  configureWebpack() {
    const mergeConfig = {
      plugins: [
        // CDN导入, 如果不需要cdn加速，注释下面代码就可以
        new WebpackCdnPlugin(configCdn),
      ],
    };
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      console.log("\n---生产环境---\n");
      console.log(`1.gzip压缩(需要nginx开启gzip)`);
      mergeConfig.plugins.push(
        new CompressionPlugin({
          // filename: "[path].gz[query]",
          // algorithm: "gzip",
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      );
    }
    return mergeConfig;
  },
  chainWebpack(config) {
    // 移除资源预加载(路由懒加载才能正常使用)
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test
    // 设置别名
    config.resolve.alias
      .set("@", utils.resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", utils.resolve("src/components"))
      .set("_conf", utils.resolve("config"));
    // 设置 svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(utils.resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(utils.resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径
            hack: `true; @import "@/assets/css/theme_var.less";`,
          },
        },
      },
      sass: {
        // 配置scss 全局样式文件 支持全局变量
        prependData: `
       @import "@/assets/css/common.scss";
     `,
      },
    },
  },
};
// 打印webpack配置信息
// console.log(JSON.stringify(config))

module.exports = config;
