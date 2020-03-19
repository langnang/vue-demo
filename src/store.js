import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/modules/store';
import actions from './store/actions';
import getters from './store/getters';
import mutations from './store/mutations';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        store
    },
    actions,
    getters,
    mutations
})