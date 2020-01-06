// pages/component/index.js
Page({
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.reportAnalytics('enter_home_programmatically', {})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'小程序官方组件展示',
      path:'pages/component/index'
    }

  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:'view',
        name:'视图容器',
        open:false,
        pages:['view','scroll-view','swiper','movable-view','cover-view']
      },{
        id:'content',
        name:'基础内容',
        open:false,
        pages:['text','icon','progress','rich-text']
      },{
        id:'form',
        name:'表单组件',
        open:false,
        pages:['button','checkbox','form','input','label','picker','picker-view','radio','slider','switch','textarea','editor']
      },{
        id:'nav',
        name:'导航',
        open:false,
        pages:['navigator']
      },{
        id:'map',
        name:'地图',
        open:false,
        pages:['map']
      },{
        id:'canvas',
        name:'画布',
        open:false,
        pages:['canvas']
      },{
        id:'open',
        name:'开放能力',
        open:false,
        pages:['ad','open-data','web-view']
      }
    ]

  },
  kindToggle(e){
    const id=e.currentTarget.id
    const list=this.data.list
    for(let i=0,len=list.length;i<len;++i){
      if(list[i].id===id){
        list[i].open=!list[i].open
      }else{
        list[i].open=false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  }
})