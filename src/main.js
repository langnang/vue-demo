import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import "./plugins/axios";
import "./plugins/element";
import "./plugins/fontawesome";
import "./plugins/vue-wechat-title";
import "particles.js";

import particlesData from "./particles.json";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

window.particlesJS("app", particlesData);
