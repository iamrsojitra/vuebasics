import Vue from "vue";
import Router from "vue-router";
import Init from "@/components/Init";
import Topics from "@/components/Topics";
import Intro from "@/components/Intro";
import Comparison from "@/components/Comparison";
import Installation from "@/components/Installation";
import LifeCycle from "@/components/LifeCycle";
import Syntax from "@/components/Syntax";
import Form from "@/components/Form";
import VueRouter from "@/components/VueRouter";
import Thanks from "@/components/Thanks";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Init",
      component: Init
    },
    {
      path: "/intro",
      name: "Intro",
      component: Intro
    },
    {
      path: "/topics",
      name: "Topics",
      component: Topics
    },
    {
      path: "/comparison",
      name: "Comparison",
      component: Comparison
    },
    {
      path: "/installation",
      name: "Installation",
      component: Installation
    },
    {
      path: "/life-cycle",
      name: "LifeCycle",
      component: LifeCycle
    },
    {
      path: "/syntax",
      name: "Syntax",
      component: Syntax
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    },
    {
      path: "/vue-router",
      name: "VueRouter",
      component: VueRouter
    },
    {
      path: "/thanks",
      name: "Thanks",
      component: Thanks
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = "Vuebasics | " + to.name;
  NProgress.start();
  return next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
  NProgress.done();
});

export default router;
