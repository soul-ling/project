import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/base.css";
import "./assets/style/el-reset.css"
Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Carousel, CarouselItem } from 'element-ui';
// // Vue.component(Carousel.carousel, Carousel)
// // Vue.component(CarouselItem.carousel-item, CarouselItem)
// Vue.use(Carousel)
// Vue.use(CarouselItem)

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
