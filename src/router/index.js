import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/pages/home/Home.vue";
import City from "@/pages/city/City";
import Detail from "@/pages/detail/Detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/City",
      name: "City",
      component: City
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    }
  ]
});
