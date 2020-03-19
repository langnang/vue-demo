import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRoute from './routes/home.vue'
import ErrorRoute from './routes/error.vue'
import DynamicRoute from './routes/dynamic.vue';

import VueAwesomeRoute from './routes/vue-awesome.vue';


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