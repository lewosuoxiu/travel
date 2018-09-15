<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201405/30/258359fbfa587e26a207cee0ffe39211.jpg_600x330_d44d5476.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">观澜山水田园旅游文化园</div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary"
        @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1606/d9/d9aa3adfb1612eefe2.water.jpg_r_800x800_f32bc962.jpg",
        "http://img1.qunarzz.com/sight/p0/1409/22/b44ecf92d00700b745dd61a4b5d39368.jpg_r_800x800_4a25dad6.jpg"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>

<style lang="stylus" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;

    .banner-img {
        width: 100%;
    }

    .banner-info {
        display: flex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 0.6rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

        .banner-title {
            flex: 1;
            font-size: 0.32rem;
            padding: 0 0.2rem;
        }

        .banner-number {
            height: 0.32rem;
            margin-top: 0.14rem;
            padding: 0 0.4rem;
            line-height: 0.32rem;
            border-radius: 0.2rem;
            background: rgba(0, 0, 0, 0.8);
            font-size: 0.24rem;

            .banner-icon {
                font-size: 0.24rem;
            }
        }
    }
}
</style>

