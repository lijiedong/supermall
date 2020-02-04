<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div  class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
   /*使用line-height可以自动居中，但是当没有内容的时候会不显示*/
  height:44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>
