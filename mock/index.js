// 引入 Mock
import MockJs from 'mockjs'
const config = require('../config')

// 自动化导入模拟api
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  let file = files(key).default || files(key)
  file.forEach(item => {
    MockJs.mock(config.baseApi + item.url, item.type, item.response)
  })
})
