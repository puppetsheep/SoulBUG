const app = getApp();
Page({
  data: {
    counting:0,
    colorCount:0,
    mathCount:0,
    networkCount:0,
    chinaCount:0,
    version:'',
    ColorList: app.globalData.ColorList
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.puppetsheep.cn/miniprogram/counting.json',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        if (res.statusCode == 200) {
          // console.log(res.data)
          that.setData({
            version:res.data.version
          })
        }

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  gongyang(){
    wx.navigateToMiniProgram({
      appId: 'wx52d2bf5809cd0743',
      // path: '',
      // extraData: {
      //   foo: 'bar'
      // },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: '灵魂BUG', // 分享标题
      desc: '人性自有缺点，灵魂各有BUG', // 分享描述
      path: 'pages/index/index' // 分享路径
    }
  }
})