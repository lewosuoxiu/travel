import Vue from "vue";
import App from "./App";
import router from "./router";
import "styles/reset.css";
import "styles/border.css";
import FastClick from "fastclick";
import "styles/iconfont.css";
import VueAwesomSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
FastClick.attach(document.body);
Vue.use(VueAwesomSwiper);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
