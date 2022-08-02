import Vue from 'vue'
import App from './App.vue'
//引入store（可省略index）
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,//简写。全
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')

