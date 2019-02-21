/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import ChequesIndex from './components/cheques/ChequesIndex.vue';
import ChequesCreate from './components/cheques/ChequesCreate.vue';
import ChequesEdit from './components/cheques/ChequesEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            chequesIndex: ChequesIndex
        }
    },
    {path: '/admin/cheques/create', component: ChequesCreate, name: 'createCheque'},
    {path: '/admin/cheques/edit/:id', component: ChequesEdit, name: 'editCheque'},
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')