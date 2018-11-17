import Vue from 'vue';
import Vuex from './vuex/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    }
  },
  strict: true,// 开启严格模式
});
