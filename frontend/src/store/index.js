import Vue from 'vue'
import Vuex from 'vuex'

import productModule from '@/store/product/productModule.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    productModule: productModule,
  

  },
})

export default store
