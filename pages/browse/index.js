// pages/browse/index.js

const AV = require('../../libs/av-weapp-min.js');
var app = getApp();

Page({
  data: {
        inputShowed: false,
        inputVal: "",
        courses: [],
        skipped: 0,
        loading: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function() {

  },
  onShow:function(){
    // 页面显示
    this.setData({
      loading: true
    })
    new AV.Query('Course')
      .limit(10)
      .descending('updatedAt')
      .find()
      .then(courses => this.setData({ courses }))
      .catch(console.error);
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
  toDetail: function(e) {
    wx.navigateTo({
      url: '../detail/index?'+'objectId='+e.currentTarget.dataset.id
    });
  },
  addCourse: function(e){
    app.globalData.course=null;
    wx.navigateTo({
      url: '../rate/index'
    });
  },
  onPullDownRefresh: function(){
    this.setData({
      skipped: 0,
      loading: true
    })
    new AV.Query('Course')
      .limit(10)
      .descending('updatedAt')
      .find()
      .then(courses => this.setData({ courses }))
      .catch(console.error);
    wx.stopPullDownRefresh();
  },
  onReachBottom: function(){
    var that = this;
    this.setData({
      skipped: this.data.skipped + 10,
      loading: true
    })
    new AV.Query('Course')
      .limit(10)
      .skip(that.data.skipped)
      .descending('updatedAt')
      .find()
      .then(courses => this.setData({
        courses: that.data.courses.concat(courses)
      }))
      .catch(console.error);
    this.setData({
      loading: false
    })
  },
  onShareAppMessage: function () {
      return {
          title: '选什么课',
          path: '/pages/browse/index'
      }
  }
});