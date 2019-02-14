import Vue from 'vue';
import Router from 'vue-router';
import NavConfig from '@/router/nav.config.json';

Vue.use(Router);

const registerRoute = (navs) => {
  // console.log(1);
  navs.forEach((item) => {
    console.log(`@/pages/${item.name}`);
    item.component = require(`@/pages/${item.name}`).default; // eslint-disable-line import/no-dynamic-require
  });
  return navs;
};

const routers = registerRoute(NavConfig);
console.log(routers);

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
