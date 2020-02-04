<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--轮播图-->
   <home-swiper :banners="banners" />
    <!--推荐-->
    <home-recommend-view :recommends="recommends" />
    <feature/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
    </ul>

  </div>

</template>

<script>

  import HomeSwiper from './childrenCompents/HomeSwiper'
  import HomeRecommendView from './childrenCompents/HomeRecommendView'
  import Feature from './childrenCompents/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      HomeRecommendView,
      Feature,
      NavBar,
      TabControl
    },
    data(){
      return{
       banners:[],
        recommends:[]
      }
    },
    created(){
      // 1. 请求多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top:44px;
  }

.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: auto;
}
  .tab-control{
    position: sticky;
    top:44px;
  }

</style>
