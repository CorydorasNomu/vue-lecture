import Vue from "vue";
import Router from "vue-router";

// import page components
import Login from "../components/vue/Login.vue";
import Register from "../components/vue/Register.vue";
import Manage from "../components/vue/Manage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  // configuration for routing
  routes: [
    {
      path: '/',
      component: Login,
      name:  'Login'
    },
    {
      path: '/register',
      component: Register,
      name:  'Register'
    },
    {
      path: '/manage',
      component: Manage,
      name:  'Manage'
    },
  ]
});