<template>
  <div>
      <div class="recommend-title"> 周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                 <img class="item-img" :src="item.imgUrl" >
            </div>
               
            <div class="item-info">
                <p class="item-title">{{item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
    line-height: 0.8rem;
    background: #eee;
    text-indent: 0.2rem;
    margin-top: 0.2rem;
}

.item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
}

.item-img {
    width: 100%;
}

.item-info {
    padding: 0.1rem;

    .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        ellipsis();
    }

    .item-desc {
        line-height: 0.4rem;
        color: #ccc;
        ellipsis();
    }
}
</style>

