import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRoute from './../views/home.vue'
import ErrorRoute from './../views/error.vue'
import DynamicRoute from './../views/dynamic.vue';

import VueAwesomeRoute from './../views/vue-awesome.vue';


Vue.use(VueRouter);
export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            component: HomeRoute,
        },
        {
            path: "/vue-awesome",
            component: VueAwesomeRoute,
        },
        {
            path: "/dynamic/:id",
            component: DynamicRoute,
        },
        {
            path: "*",
            component: ErrorRoute,
        }
    ]
})