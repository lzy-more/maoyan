// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// ...
import pageTitle from './components/pageTitle'
import loading from './components/layout/loading.vue'
// 注册全局组件
Vue.component('pageTitle',pageTitle)
Vue.component('loading',loading)
// ...
/**
 * 其实就是：import router from './router/index.js'
 * 在使用webpack项目中，如果导入index.js，则可以省略
 * 这里是相当于导入了一个路由
 */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
