// pages/main/main.js
Page({
  data: {
    currentPage: "main"
  },
  onHide: function () {
    // 页面隐藏
    console.log(this.data.currentPage + " onHide")
  },
  onUnload: function () {
    // 页面关闭
    console.log(this.data.currentPage + " onUnload")
  },
  showDetail: function () {
    wx.navigateTo({
      url: '../detail/detail',
      success: function (res) {
        // success
        console.log("navigateTo success")
      },
      fail: function () {
        // fail
        console.log("navigateTo fail")
      },
      complete: function () {
        // complete
        console.log("navigateTo complete")
      }
    })
  }
})