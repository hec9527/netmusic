import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 跨域代理测试
// import API from '@/api/index';
// const url = 'http://localhost:8080/api/search?keywords="海阔天空"';
// fetch(url);
// API.get(url);
