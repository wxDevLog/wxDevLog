// pages/welcome/welcome.js
Page({
  data: {
    currentPage: "welcome"
  },
  onHide: function () {
    // 页面隐藏
    console.log(this.data.currentPage + " onHide")
  },
  onUnload: function () {
    // 页面关闭
    console.log(this.data.currentPage + " onUnload")
  },
  start:function() {
    wx.redirectTo({
      url: '../main/main',
      success: function (res) {
        // success
        console.log("redirectTo main success")
      },
      fail: function () {
        // fail
        console.log("redirectTo main fail")
      },
      complete: function () {
        // complete
        console.log("redirectTo main complete")
      }
    })
  }
})