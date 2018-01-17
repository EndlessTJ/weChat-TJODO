//index.js
//获取应用实例
const app = getApp();
const util = require("../../utils/util.js")

Page({
  data: {
    taskArr: app.globalData.taskData,
    todoTitle: "",
    todoType: "work",
    todoContent: "",
    typeArr: ["work", "life", "other"],
    toastFlag: false
  },
  //事件处理函数
  addToogle: function(event) {
    this.setData({
      toastFlag: !this.data.toastFlag
    })
  },
  addTitle(event) {
    this.setData({
      todoTitle: event.detail.value
    })
  },
  addType(event) {
    this.setData({
      todoType: this.data.typeArr[event.detail.value*1]
    })
  },
  addContent(event){
    this.setData({
      todoContent: event.detail.value
    })
  }, 
  taskConfirm() {
    const todoData = {};
    todoData.title = this.data.todoTitle;
    todoData.type = this.data.todoType;
    todoData.date = util.formatTime(new Date());
    todoData.content = this.data.todoContent;
    this.setData({
      taskArr: (() => {this.data.taskArr.unshift(todoData);return this.data.taskArr})(),
      toastFlag: false
    })
     wx.setStorageSync("taskData", this.data.taskArr)
  },
  taskCanel () {
    this.setData({
      toastFlag: false
    })
  },
  onLoad: function () {


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
