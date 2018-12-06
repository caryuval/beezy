import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/hero',
            name: 'Hero',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/Hero.vue'),
        },
        {
            path: '/settings',
            name: 'Settings',
            component: () => import('./components/settings/Settings.vue'),
        },
    ],
});
