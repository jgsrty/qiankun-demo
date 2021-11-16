import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "firstVue",
    entry: "http://localhost:8081",
    container: "#firstVue",
    activeRule: "/first-vue",
  },
  {
    name: "secondVue",
    entry: "http://localhost:8082",
    container: "#secondVue",
    activeRule: "/second-vue",
  },
];

registerMicroApps(apps);
start();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
