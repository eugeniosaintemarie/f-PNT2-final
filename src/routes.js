import Vue from 'vue'
import VueRouter from 'vue-router'

import Input from "./components/Input.vue";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/input' },
    { path: '/input/:valorInicial/:estilo/:colorDeFondo/:titulo', name: 'input', component: Input, props: true },
  ]
})

