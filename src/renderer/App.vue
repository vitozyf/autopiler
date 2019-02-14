<template>
  <div id="app">
    <ap-nav />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import ApNav from '@/layouts/apnav.vue';
export default {
  name: 'electron-vue',
  components: {
    ApNav,
  },
};
</script>

<style lang="scss">
/* CSS */
#app {
  padding: 0;
  height: 100%;
}
</style>
