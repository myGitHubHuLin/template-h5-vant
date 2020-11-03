/**
 * maybe js工具函数库
 * @author maybe
 * @license https://gitee.com/null_639_5368/js-utils
 */

/**
 * 元素是否在视窗内
 * @param {*} el
 */
export function isInViewPort(el) {
  //获取屏幕高度
  let windowTop =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  // 获取元素相对视窗的位置
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom > 0 && top < windowTop) {
    // 已经进入可视区
    console.log("已经进入可视区");
    return true;
  } else {
    // 未进入可视区
    console.log("未进入可视区");
    return false;
  }
}
/**
 * 函数节流
 * @param {*} fn
 * @param {*} interval
 * @param {*} isImmediate
 */
export function throttle(
  fn,
  wait = 500,
  isImmediate = false
) {
  let flag = true;
  let timer = null;
  if (isImmediate) {
    return function () {
      if (flag) {
        fn.apply(this, arguments);
        flag = false;
        timer = setTimeout(() => {
          flag = true;
        }, wait);
      }
    };
  }
  return function () {
    if (flag) {
      flag = false;
      let timer = setTimeout((...rest) => {
        fn.apply(this, rest);
        flag = true;
      }, wait);
    }
  };
}
/**
 * @desc 函数防抖
 * @param func 目标函数
 * @param wait 延迟执行毫秒数
 * @param immediate true - 立即执行， false - 延迟执行
 */
export function debounce(
  func,
  wait,
  immediate
) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply;
      }, wait);
    }
  };
}

/**
 * 深拷贝
 * @param {*} obj
 */
export function deepClone(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        result[key] = deepClone(obj[key]); //递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
/**
* 动态创建script
* @param {string} src 脚本地址 
* @param {string} id 唯一标识
* @param {'defer' | 'async'} load 'defer' | 'async'  加载脚本的时机,默认是同步加载 
* @example 
* createScript(...).then().catch() 
* ----or----
* try {await  createScript(...)} catch(err){console.log(err)}
* @returns {Promise<any>} Promise
*/
export function createScript(src, id, load) {
  return new Promise((resolve, reject) => {
    try {
      let script = document.createElement("script");  //创建一个script标签
      script.type = "text/javascript";
      script.src = src;
      if (id) script.id = id;
      if (load) {
        script.setAttribute('load', load);
      }
      document.getElementsByTagName('head')[0].appendChild(script);
      console.log(`script id：${id} 加载中...`)
      script.onload = function () {
        console.log(`script id：${id} 加载完成`)
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  })
}
/**
* 删除脚本
* @param {HTMLElement} dom script元素 
* @returns {Promise<any>} Promise
*/
export function removeScript(dom) {
  return new Promise((resolve, reject) => {
    try {
      if (!dom) {
        throw new Error('请提供有效的script dom')
      }
      document.getElementsByTagName('head')[0].removeChild(dom);
      resolve();
    } catch (error) {
      reject(error);
    }
  })
}

/**
 * 存储localStorage
 * @param name
 * @param content
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage
 * @param name
 * @returns {string}
 */
export const getStore = (name) => {
  if (!name) return;
  return window.localStorage.getItem(name);
};
/**
 * 删除localStorage
 * @param name
 */
export const removeStore = (name) => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

/**
 * 延迟加载方法
 * @param {Function} fn
 * @param {number} time
 */
export const submitTimeOut = (fn, time) => {
  setTimeout(function () {
    fn();
  }, time);
};
/**
 * 数组插入到Formdata
 * @example 1.在上传多张图片的时候会用到
 * @description 此方法会改变原数组,console.log(formData)是看不到效果的必须在请求体里面才能看到
 * @param {FormData} formData 源formdata
 * @param {string} key 数组key值
 * @param {Array} arr 数组
 * @returns {void}
 */
export const formatArrToFormData = (
  formData,
  key,
  arr
) => {
  arr.forEach((file, index) => {
    formData.append(`${key}[${index}]`, file);
  });
};

/**
* 判断是否移动设备访问
*/
export function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
}

/**
 * 获取页面高度
 */
export function getPageHeight() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
/**
 * 获取页面宽度
 */
export function getPageWidth() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

/**
 * 判断是否是微信内置浏览器环境
 */
export const isWeixin = () => {
  const ua = navigator.userAgent.toLowerCase();
  const uaMatch = ua.match(/MicroMessenger/i);
  if (uaMatch == "micromessenger") {
    return true;
  } else {
    return false;
  }
};
/**
 * 判断运行环境是安卓还是IOS
 * @returns  {boolean} true => 安卓 false => IOS
 */
export function isAndroid() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  // let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isAndroid ? true : false;
}

/**
 * 判断是否在元素外触发事件
 * @param event  事件源
 * @param el 元素
 * @returns {*} true 在元素外 false 在元素内
 */
export function isOutEl(event, el) {
  let path = getEventPath(event);
  return !Array.from(path).includes(el);
}

/**
 * 获取事件冒泡路径
 * @description 兼容ie11,edge,chrome,firefox,safari
 * @param evt
 * @returns {*}
 */
export function getEventPath(evt) {
  const path = (evt.composedPath && evt.composedPath()) || evt.path,
    target = evt.target;
  if (path != null) {
    return path.indexOf(window) < 0 ? path.concat(window) : path;
  }
  if (target === window) {
    return [window];
  }
  const getParents = (node, memo) => {
    memo = memo || [];
    const parentNode = node.parentNode;

    if (!parentNode) {
      return memo;
    } else {
      return getParents(parentNode, memo.concat(parentNode));
    }
  };
  return [target].concat(getParents(target), window);
}
/**
 * 判断对象是否为空对象({})
 * @param event  事件源
 */
export function isEmptyObj(obj) {
  return obj ? Object.keys(obj).length == 0 : false;
}
