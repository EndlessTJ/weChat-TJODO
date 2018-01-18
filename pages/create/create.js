const util = require("../../utils/util.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    typeArr: ["work", "life", "other"],
    todoTitle: "",
    todoType: "work",
    todoContent: "",
  },
  addTitle(event) {
    this.setData({
      todoTitle: event.detail.value
    })
  },
  addType(event) {
    this.setData({
      todoType: this.data.typeArr[event.detail.value * 1]
    })
  },
  addContent(event) {
    this.setData({
      todoContent: event.detail.value
    })
  },
  taskConfirm() {
    const todoData = {};
    const taskData = wx.getStorageSync('taskData') || []
    todoData.title = this.data.todoTitle;
    todoData.type = this.data.todoType;
    todoData.date = util.formatTime(new Date());
    todoData.content = this.data.todoContent;
    taskData.unshift(todoData)
    wx.setStorageSync("taskData", taskData)
    wx.switchTab({
      url: "../index/index"
    })
  },
  taskCanel() {
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})