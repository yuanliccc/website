import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  showLoading: false,
  showTip: false,
  userInfo: undefined,
  errMessage: '程序员小袁正在处理，请稍后重试'
}

const getters = {
  showLoading(showLoading) {
    return state.showLoading
  },
  showTip(showTip) {
    return state.showTip
  },
  userInfo(userInfo) {
    if(!state.userInfo) {
      const localUserInfo = window.localStorage.getItem("userInfo")
      if(localUserInfo === null) {
        state.userInfo = undefined
      }
      else {
        state.userInfo = JSON.parse(localUserInfo)
      }
    }
    return state.userInfo
  },
  errMessage: function (errMessage) {
    return state.errMessage
  }
}

const mutations = {
  showLoading: function () {
    state.showLoading = true
  },
  hideLoading: function () {
    state.showLoading = false
  },
  showTip: function () {
    state.showTip = true
  },
  hideTip: function () {
    state.showTip = false
  },
  setUserInfo: function (state, newUseInfo) {
    state.userInfo = newUseInfo

    window.localStorage.setItem("userInfo", JSON.stringify(state.userInfo))
  },
  loginOut: function () {
    state.userInfo = undefined
    window.localStorage.removeItem("userInfo")
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store;
