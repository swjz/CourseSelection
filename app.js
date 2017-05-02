//app.js
const AV = require('./libs/av-weapp-min.js');
AV.init({ 
 appId: 'M2u78Vx0oOQl6AtFGYjbx97n-gzGzoHsz', 
 appKey: 'cJBBGrUkXV0OvWA3MRsRHtGb', 
});

// AV.User.loginWithWeapp().then(user => {
//   this.globalData.user = user.toJSON();
// }).catch(console.error);


App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    AV.User.loginWithWeapp().then(user => {
      // console.log(user)
      // 调用小程序 API，得到用户信息
      wx.getUserInfo({
        success: ({userInfo}) => {
          // 更新当前用户的信息
          user.set(userInfo).save().then(user => {
            // 成功，此时可在控制台中看到更新后的用户信息
            this.globalData.user = user
            console.log(this.globalData.user)
          }).catch(console.error);
        },
        fail: function(res) {
          console.log(res)
        }
      })
    }).catch(error => console.error(error))
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    course: {}
  }
})