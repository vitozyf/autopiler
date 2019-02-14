import Vue from 'vue';
import Router from 'vue-router';
import NavConfig from '@/router/nav.config.json';

Vue.use(Router);

const registerRoute = (navs) => {
  // console.log(1);
  navs.forEach((item) => {
    item.component = require(`@/pages/${item.name}`).default; // eslint-disable-line import/no-dynamic-require
  });
  return navs;
};

const routers = registerRoute(NavConfig);

export default new Router({
  routes: [
    ...routers,
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'Project' },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
