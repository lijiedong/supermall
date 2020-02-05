<template>
    <div class="goods">
      <good-item v-for="item in goods" :goods-item="item"></good-item>
    </div>
</template>

<script>
  import GoodItem from './GoodsItem'
  export default {
    name: "GoodsList",
    components:{
      GoodItem
    },
    props:{
      goods:{
        type:Array,
        default(){

        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
