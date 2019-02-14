<template>
  <div class="ap-template">
    <ap-header title="模版"></ap-header>

    <el-menu
      :default-active="activeIndex"
      class="ap-template-menu"
      mode="horizontal"
      active-text-color="#4481f6"
    >
      <el-menu-item index="vue">Vue模版</el-menu-item>
      <el-menu-item index="react">React模版</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { ApHeader } from '@/components';
export default {
  name: 'Template',
  components: {
    ApHeader,
  },
  data() {
    return {
      activeIndex: 'vue',
    };
  },
};
</script>
<style lang="scss">
.ap-template-menu {
  margin-top: 3px;
  .el-menu-item {
    font-size: 20px;
  }
  &.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 3px solid $brand-primary;
  }
}
</style>


