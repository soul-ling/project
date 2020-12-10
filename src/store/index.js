import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let userInfo = localStorage.getItem('hello-userInfo') || {}
userInfo = JSON.parse(localStorage.getItem('hello-userInfo'))
export default new Vuex.Store({
    state: {
        userInfo
    },
    mutations: {
        set_userinfo(state, payload) {
            state.userInfo = payload
        }
    },
    actions: {},
    modules: {}
});