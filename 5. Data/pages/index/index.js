//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '一天一个小程序之五',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    var changeData = {
      motto: '通过 this.setData() 动态更新数据!'
    }
    this.setData(changeData);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
