// pages/rate/index.js

const AV = require('../../libs/av-weapp-min.js');

Page({
  data: {
    depts: ['材料学院', '城规系', '地学系', '电工电子中心', '电机系', '电子系', '法学院', '工物系', '工业工程', '公管学院', '航院', '核研院', '化工系', '化学系', '环境学院', '机械系', '计算机系', '建管系', '建筑技术', '建筑系', '建筑学院', '交叉信息院', '教研院', '金融学院', '经管学院', '精仪系', '马克思主义学院', '美术学院', '汽车系', '清华-伯克利深圳学院', '热能系', '人文学院', '软件学院', '社科学院', '深研生院', '生命学院', '生医系', '数学系', '水利系', '苏世民书院', '体育部', '图书馆', '土木系', '土水学院', '外文系', '网络中心', '微纳电子系', '武装部', '物理系', '校医院', '新闻学院', '新雅书院', '宣传部', '学生部', '训练中心', '药学院', '医学院', '艺教中心', '中文系', '周培源数学中心', '自动化系'],
    index: 0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var Rate = AV.Object.extend('TypeRate');
    var rate = new Rate();
    rate.set('value', e.detail.value);
    rate.save().then(function (thisRate) {
      console.log('objectId is ' + thisRate.id);
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    }, function (error) {
      console.error(error);
    });
  }
})