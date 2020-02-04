<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <!--加这个div的是为了当图片切换的时候，文字的颜色也进行切换，不放在slot上面，
      是因为当插槽进行替换的时候，会直接把下面的插槽给直接替换掉换上其他的代码,
      如果想要给插槽加上一些属性的话，最好是用div包裹插槽-->
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },

    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    /*让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容*/
    flex: 1;
    text-align: center;
    /*tab-bar高度一般49px*/
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    /*使图片距离上面三个像素*/
    margin-top: 3px;
    /*消除图片和下面文字中间三个像素的距离 */
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
