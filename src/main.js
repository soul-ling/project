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
//路由前置钩子，路由守卫
router.beforeEach((to, from, next) => {

    // console.log(from);
    //用户登陆之后，localstorage中有token
    let token = localStorage.getItem('hello')
        // console.log(to);
    if (token) {
        next()
    } else {
        if (to.path == "/login") {
            next()
        } else {
            next({ path: "/login" })
        }
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");