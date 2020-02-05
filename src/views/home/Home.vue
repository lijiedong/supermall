<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--轮播图-->
   <home-swiper :banners="banners" />
    <!--推荐-->
    <home-recommend-view :recommends="recommends" />
    <feature/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
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
  import GoodList from 'components/content/goods/GoodsList'
  import {getHomeMultidata,
  getHomeGoods} from "network/home";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Home",
    components:{
      GoodsList,
      HomeSwiper,
      HomeRecommendView,
      Feature,
      NavBar,
      TabControl
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    data(){
      return{
       banners:[],
        recommends:[],
        goods:{
         // 分别对应流行新款，精选
         'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop'
      }
    },
    created(){
      // 1. 请求多个数据
      this.getMultidata();
      // 2 请求商品数据
      this.getGoods('pop');
      this.getGoods('new');
      this.getGoods('sell');
    },
    methods:{



      /**
       * 网络请求相关的方法
       */
      getMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getGoods(type,page){
        const nextPage=this.goods[type].page+1;
        getHomeGoods(type,nextPage).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page=nextPage;
        })
      },
      /**
       * 事件爱你坚挺监听相关的方法
       */
      tabClick(index){
        console.log(index);
        switch (index){
           case 0:
             this.currentType='pop';
             break;
           case 1:
             this.currentType='new';
             break;
           case 2:
             this.currentType='sell';
             break;
         }
        console.log(this.currentType);
      }
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
