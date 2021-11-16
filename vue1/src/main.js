import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

let instance = null;
const render = (props) => {
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
};

if (window.__POWERED_BY_QIANKUN__) {
  console.log("qiankun vue1");
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  console.log("独立运行 vue1");
  render();
}

export const bootstrap = async (props) => {
  console.log("初始化vue1");
};
export const mount = async (props) => {
  console.log("加载vue1");
  render(props);
};
export const unmount = async (props) => {
  instance.$destroy();
  console.log("卸载vue1");
}
