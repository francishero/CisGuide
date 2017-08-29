var util = require( '../../utils/util.js' )
Page( {
  data: {
    userinfo:{},
    projects: [ { name: 'Bank', },
      { name: 'Hospital',  },
      { name: 'Train Station', },
      { name: 'Airport', },
      { name: 'Shopping Center', },
      { name: 'Immigration', },
      { name: 'Medical checkup center',  }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({ userInfo: res.userInfo })
            that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },
  onReady: function() {
   
  }
})
