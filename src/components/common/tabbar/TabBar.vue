<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    /*下面这四个是设置tabbar在页面的最下面的位置*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*设置tabbar和上面内容的一个过渡*/
    box-shadow:0 -1px 1px rgba(100,100,100,.2);
  }
</style>
