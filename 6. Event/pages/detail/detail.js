// pages/detail/detail.js
Page({
  data: {
    currentPage: "detail"
  },
  onHide: function () {
    // 页面隐藏
    console.log(this.data.currentPage + " onHide")
  },
  onUnload: function () {
    // 页面关闭
    console.log(this.data.currentPage + " onUnload")
  },
})