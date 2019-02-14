<template>
  <div class="ap-nav">
    <div class='ap-nav-left'>
      111
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'apnav',
};
</script>
<style lang="scss" scoped>
.ap-nav {
  display: flex;
  height: 100%;
}
.ap-nav-left {
  background-color: #4481f6;
  width: 300px;
  color: $brand-primary;
}
</style>

