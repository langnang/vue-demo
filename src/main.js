import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./locales";
import particlesData from "./particles.json";
import "./plugins/axios";
import "./plugins/element";
import "./plugins/fontawesome";
import "./plugins/vue-wechat-title";
import "particles.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

window.particlesJS("app", particlesData);
