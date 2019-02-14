import Vue from 'vue';
import axios from 'axios';
import electron from 'electron';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router';
import store from './store';

import './assets/scss/global.scss';

Vue.use(ElementUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// 屏幕适配
const devInnerHeight = 1080.0; // 开发时的InnerHeight
const devDevicePixelRatio = 1.0; // 开发时的devicepixelratio
const devScaleFactor = 1.3; // 开发时的ScaleFactor
const { scaleFactor } = electron.screen.getPrimaryDisplay();
const zoomFactor =
  (window.innerHeight / devInnerHeight) *
  (window.devicePixelRatio / devDevicePixelRatio) *
  (devScaleFactor / scaleFactor);
electron.webFrame.setZoomFactor(zoomFactor);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
