// coming.vue  路径：src/components

<template>
  <div>
    <!-- 本页面自有的部分 -->
    <div class="hopeful">
      <p>近期最受期待</p>
      <div class=" img-list" ref='imglist' @touchmove='throttleRun($event)'>
        <div class="hopeful-list" v-for='(item,index) in hopefulList' :key='index'>
          <div class="hope-img">
            <img :src="item.img.replace('w.h','128.180')" alt="">
            <p class="wish">{{item.wish}}想看</p>
          </div>
          <div class="hopeful-info">
            <p class="name">{{item.nm}}</p>
            <p class="showTime">{{item.comingTitle}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comming">
      <!-- 使用组件 -->
      <movie-list v-for="(c_item,index) in comingList" :key="index" :mitem='c_item'></movie-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import movieList from './movieList' //引入组件

export default {
  name: 'coming',
  data(){
return{
  hopefulList:[],
  comingList:[]
}
  },
  components: {
    movieList  //注册组件
  }
}
</script>

<style  scoped>
  @import "../assets/css/movie-list.css";
  </style>
 