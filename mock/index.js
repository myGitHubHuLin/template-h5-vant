// 引入 Mock
import MockJs from 'mockjs'

const prefix = '/mock'
// 自动化导入模拟api
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach(key => {
  let file = files(key).default || files(key)
  file.forEach(item => {
    MockJs.mock(prefix + item.url, item.type, item.response)
  })
})
