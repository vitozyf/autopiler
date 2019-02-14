<template>
  <div class="ap-nav">
    <div class='ap-nav-left'>
      <ul>
        <li
          class="ap-nav-item"
          v-for="item in NavConfig"
          :key="item.path"
        >
          <router-link
            :to="item.path"
            active-class="active"
          >
            <i :class="item.icon"></i>
            <div>
              {{item.title}}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class='ap-nav-right'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavConfig from '@/router/nav.config.json';
export default {
  name: 'apnav',
  data() {
    return {
      NavConfig,
    };
  },
};
</script>
<style lang="scss" scoped>
.ap-nav {
  display: flex;
  height: 100%;
}
.ap-nav-left {
  background-color: $brand-primary;
  width: $nav-width;
  text-align: center;
  padding: 50px 0;
  // color: $brand-primary;
}
.ap-nav-item {
  font-size: 18px;
  cursor: pointer;
  a {
    padding: 10px 0;
    margin: 10px 0;
    color: #e6e6e6;
    display: block;
    position: relative;
    &.active {
      color: #fff;
      &::before {
        content: '';
        width: 5px;
        height: 100%;
        background: #fff;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 2px;
      }
    }
  }
}
.ap-nav-right {
  flex: 1;
}
</style>

