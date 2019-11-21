// 设置 rem 函数
function setRem () {
  let htmlWidth = '320px'
  if (navigator.userAgent.match(/mobile/i)) {
    // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
    htmlWidth = window.screen.width || window.screen.availWidth
  } else {
    htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  }
  // 得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0]
  // 设置根元素字体大小,width/x=320/16
  htmlDom.style.fontSize = htmlWidth / 20 + 'px'
  console.log(htmlWidth, htmlDom.style.fontSize)
}

// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
