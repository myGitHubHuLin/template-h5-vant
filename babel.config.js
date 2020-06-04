module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // style: false   //   main.js中全局引入css,按需引入样式为false
        // 自定义主题按需引入
        style: (name) => `${name}/style/less`,
      },
      'vant'
    ]
  ]
};
