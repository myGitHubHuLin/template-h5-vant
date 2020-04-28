export default [
  {
    url: '/user/login',
    type: 'post',
    response: {
      code: 200,
      msg: 'success',
      data: {
        token: 'ASFJSOHFSJHAJJGJASJJKG556456ASGSADGSGDKGJKSJAKG'
      }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response: {
      code: 200,
      msg: 'success',
      data: {
        id: 154,
        name: '张三',
        age: 22
      }
    }
  },
  {
    url: '/wxTest/getSdkConfig',
    type: 'get',
    response: {
      code: 200,
      msg: 'success',
      data: {
        appId: "wx57341c32f416998d",
        nonceStr: "1sermue640h",
        signature: "3091ce52b29ae0f82c9bd87d13e3c3682c6adc2e",
        timestamp: "1588051275"
      }
    }
  }
]
