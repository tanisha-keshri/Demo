// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from "vue";
import App from "./App";
import VueDragscroll from "vue-dragscroll";

Vue.use(VueDragscroll);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
