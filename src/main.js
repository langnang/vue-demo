import Vue from 'vue'
import App from './App.vue'
import "vue-awesome/icons/index.js";
import Icon from "vue-awesome/components/Icon";
import router from './router';
import store from './store';


Vue.component('icon', Icon);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
