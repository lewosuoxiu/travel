<template>
  <div class="wrapper">
       <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
        

   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
  </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1808/3e/f1975f6bde70b202.jpg_750x200_c28601f0.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1808/59/371af39a4ca5702.jpg_750x200_1a9cfe57.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1809/ce/bca92895556c5002.jpg_750x200_cf56d46c.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
    background: #fff !important;
}

.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.6%;
    background-color: #ddd;

    .swiper-img {
        width: 100%;
    }
}
</style>

