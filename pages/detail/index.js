// pages/detail/index.js

const AV = require('../../libs/av-weapp-min.js');
var app = getApp();

Page({
    data: {
        rates: [],
        objectId: "",
        course: {},
        courseName: ""
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        var course = AV.Object.createWithoutData('Course', options.objectId);
        course.fetch().then(course => this.setData({ course })); // 将 course 数据绑定
        this.setData({
            objectId: options.objectId,
            // course: course // 是否有必要？
        });
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
        var course = AV.Object.createWithoutData('Course', this.data.objectId);
        course.fetch().then(course => this.setData({ course })); // 将 course 数据绑定
        new AV.Query('TypeRate')
            .limit(1000)
            .equalTo('course', course)
            .ascending('updatedAt')
            .find()
            .then(rates => this.setData({ rates }))
            .catch(console.error);
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    toComment: function () {
        var that = this;
        app.globalData.course = this.data.course;
        wx.navigateTo({
            url: '../rate/index?'+'objectId='+that.data.objectId
        })
    },
    tapLike: function(e){
        var thisRate = AV.Object.createWithoutData('TypeRate', e.currentTarget.dataset.likeid);
        thisRate.increment('numberOfLikes');
    },
    onPullDownRefresh: function () {
        var course = AV.Object.createWithoutData('Course', this.data.objectId);
        course.fetch().then(course => this.setData({ course })); // 将 course 数据绑定
        new AV.Query('TypeRate')
            .limit(1000)
            .equalTo('course', course)
            .ascending('updatedAt')
            .find()
            .then(rates => this.setData({ rates }))
            .catch(console.error);
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            title: '大家对 '+this.data.course.attributes.courseName+' 的评价',
            path: '/pages/detail/index?objectId='+this.data.objectId
        }
    }
})