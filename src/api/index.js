
/**
 * api接口统一出口
 */

/**
 * 自动化处理api接口绑定到全局属性$apis
 * 文件必须返回 export default {...}
 */
// const files = require.context('./modules', false, /\.ts$/)
// let api: any = {};
// files.keys().map(key => {
//     let name = key.substring(key.indexOf('/') + 1, key.indexOf('.ts'));
//     api[name] = files(key).default
// })

// export default api

// 为了代码提示只能用如下方式
import * as user from './modules/user'
import * as test from './modules/test'

export default {
    user,
    test
}
