// var wx = require('weixin-js-sdk')
var wx = require('./jssdk')
wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: 'wxf8b4f85f3a794e77', // 必填，公众号的唯一标识
  timestamp: 1576207491, // 必填，生成签名的时间戳
  nonceStr: '9x6tV7NiGHKiDWyE', // 必填，生成签名的随机串
  signature: 'a980b028132b7e939cee975b9375b0fc8548f8e4', // 必填，签名
  jsApiList: ['chooseImage'] // 必填，需要使用的JS接口列表
})
export default wx;