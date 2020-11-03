/***
 * jssdk封装
 * @author maybe
 */
// var wxJsSdk = require("@/assets/js/jssdk");
import wxJsSdk from "@/assets/js/jssdk"

// 允许jssdk获取的api列表
const jsApiList = [
    "updateTimelineShareData",
    "updateAppMessageShareData",
    "onMenuShareAppMessage",
    "onMenuShareTimeline",
    "chooseWXPay",
];

// 返回状态枚举
export const WxResultStatus = {
    success: 0,
    error: 1,
    cancel: 2
}

const baseConfig = {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: '', // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
}
export default class WxJsSdk {
    constructor(config) {
        // 如果有新的配置进行覆盖，如果没有新的配置使用默认配置
        this.config = Object.assign(baseConfig, config);
        this.initConfig();
    }
    initConfig() {
        wxJsSdk.config(this.config);
    }
    /**
     * 微信支付
     * @param {*}
     */
    wxPay(params) {
        // console.log(params);
        return new Promise((resolve, reject) => {
            const payconfig = {
                timestamp: params.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: params.nonceStr, // 支付签名随机串，不长于 32 位
                package: params.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: params.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: params.paySign, // 支付签名
                success: function (res) {
                    console.log("支付成功", res);
                    resolve(WxResultStatus.success);
                },
                fail: function (res) {
                    console.log("支付失败", res);
                    resolve(WxResultStatus.error);
                },
                cancel: function (res) {
                    console.log("支付取消", res);
                    resolve(WxResultStatus.cancel);
                },
            };
            wxJsSdk.chooseWXPay(payconfig);
        })
    }
    setFriendShare(options) {
        return new Promise((resolve, reject) => {
            // 分享给朋友
            wxJsSdk.onMenuShareAppMessage({
                title: options.title,
                link: options.link,
                imgUrl: options.imgUrl,
                // 用户确认分享后执行的回调函数
                success: function () {
                    // 设置成功
                    resolve(WxResultStatus.success);
                },
                // 用户取消分享后执行的回调函数
                cancel: function () {
                    resolve(WxResultStatus.cancel);
                }
            });
        })
    }
    setFriendCircleShare(options) {
        // 分享到朋友圈
        wxJsSdk.onMenuShareTimeline({
            title: options.title,
            desc: options.desc,
            link: options.link,
            imgUrl: options.imgUrl,
            success: function () {
                // 设置成功
            },
        });

    }

}