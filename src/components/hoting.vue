<template>
  <div>
      <!-- isReady: 数据加载好了就不显示loading动画 -->
     <loading v-if="!isReady"></loading>
    <div class="hoting">
      <movie-list v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movie-list>
    </div>
  </div>
</template>

<script>
import movieList from "./movieList"
import axios from 'axios'

export default {
   name: "hoting",
 
   data() {
      return {
         isReady:false, // 记录数据是否加载完毕
         hotList: []
      };
   },
   created() {
      axios
         .get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList")
         .then(res => {
            this.hotList = res.data.movieList;
            setTimeout(function() {
              this.isReady=true; //数据加载完毕
            },2000)
           
         });
   },
   components: {
      movieList
   }
};

</script>

  <style scoped>
  </style>
