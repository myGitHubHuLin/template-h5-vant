// 引入 Mock
import MockJs from 'mockjs'

import user from './user'

user.forEach(item => {
  MockJs.mock(item.url, item.type, item.response)
})
