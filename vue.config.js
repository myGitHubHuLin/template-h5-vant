/* eslint-disable */
const path = require("path");
// gzip压缩
const CompressionPlugin = require("compression-webpack-plugin");
// webpack cdn 插件
const WebpackCdnPlugin = require("webpack-cdn-plugin");

// 处理路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
// 网站配置
const configSite = require("./config/index.js");

// CDN配置
const configCdn = require("./config/cdn.js");

// 判断是否是生产环境
let isProd = process.env.NODE_ENV == "production" ? true : false;

module.exports = {
  // eslint检测 默认是开启的
  lintOnSave: true,
  // 资源全局路径前缀
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
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
      [process.env.VUE_APP_API_PREFIX]: {
        // 目标 API 地址
        // 开发环境
        // target: "http://127.0.0.1:7001/api", // 后端测试api地址
        target: "https://www.fastmock.site/mock/4065436981794d02775c54b5d2e22e74/common-test/api", // 记得删除这行
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL(设置跨域)
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
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
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("_conf", resolve("config"));
    // 设置 svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
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
            hack: `true; @import "@/assets/css/theme-var.less";`,
          },
        },
      },
      sass: {
        // 配置scss 全局样式文件 支持全局变量
        prependData: `
       @import "@/assets/css/common.scss";
     `,
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        plugins: [
          // px 转vw
          require("postcss-px-to-viewport")({
            unitToConvert: "px", // 需要转换的单位，默认为"px"
            viewportWidth: 750, //  设计稿的视口宽度
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ["*"], // 能转化为vw的属性列表
            viewportUnit: "vw", //  希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [".footer-view", ".custom-map"], // 需要忽略的CSS选择器
            minPixelValue: 1, // 最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, // 是否直接更换属性值，而不添加备用属性
            exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件
            include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换，例如只转换 'src/mobile' 下的文件 (include: /\/src\/mobile\//)
            landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscapeUnit: "vw", // 横屏时使用的单位
            landscapeWidth: 568, // 横屏时使用的视口宽度
          }),
        ],
      },
    },
  },
};
