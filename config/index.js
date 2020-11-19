/**
 * 环境配置入口
 */

// 依据变量 process.env.VUE_APP_MODE(在根目录.env.xxx文件配置) 来判断
const environment = process.env.VUE_APP_MODE || 'development'
const config = require('./env.' + environment)

module.exports = config
