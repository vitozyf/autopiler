<template>
  <div class="ap-header">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'ApHeader',
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
.ap-header {
  padding: 0 20px;
  h1 {
    line-height: 100px;
    font-size: 40px;
  }
  box-shadow: 0px 0px 1px 1px #ccc;
}
</style>


