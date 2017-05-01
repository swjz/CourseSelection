// pages/browse/index.js
Page({
  data: {
        inputShowed: false,
        inputVal: "",
        courses: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function() {
    new AV.Query('Course')
      .descending('updatedAt')
      .find()
      .then(courses => this.setData({ courses }))
      .catch(console.error);
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
    
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  toDetail: function() {
    wx.navigateTo({
      url: '../detail/index'
    })
  }
});