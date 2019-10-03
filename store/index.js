import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    city,
    navbar
  },
  //  把实例放在数据里面验证一下
  actions: {

  }
})

export default store
