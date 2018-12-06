import Vue from 'vue';
import Vuex from 'vuex';
import settings from './actions/settings';
import alerts from './actions/alerts';
import lists from './modules/lists';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        lists,
    },
    state: {
        showLoader: false,
    },
    mutations: {
        showLoader(state) {
            state.showLoader = true;
        },
        hideLoader(state) {
            state.showLoader = false;
        },
    },
    actions: {
        ...settings,
        ...alerts,
        loadEssentialAppData({ commit, dispatch, state }) {
            dispatch('getBooks');
            dispatch('getGenres');
        },
        immitateAPI({ commit, dispatch }, payload) {
            commit('showLoader');
            setTimeout(() => {
                commit(payload);
                if ('showSuccessMsg' in payload && payload.showSuccessMsg) {
                    dispatch('handleHttpSuccess', {
                        name: payload.msgName,
                        method: payload.method,
                    });
                }
                commit('hideLoader');
            }, 500);
        },
    },
});
