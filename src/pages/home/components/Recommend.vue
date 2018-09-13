<template>
  <div>
      <div class="recommend-title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            
                <img class="item-img" :src="item.imgUrl" >
    
            <div class="item-info">
                <p class="item-title">{{item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <button class="item-button">查看详情</button>
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
            "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg ",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园 "
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg ",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园 "
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg ",
          title: "深圳小梅沙海洋世界",
          desc: "浪漫深圳首站，浪漫的海洋主题乐园 "
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

.item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;

    .item-img {
        width: 1.7rem;
        height: 1.7rem;
        padding: 0.1rem;
    }

    .item-info {
        flex: 1;
        padding: 0.1rem;
        min-width: 0;

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

        .item-button {
            background: #ff9300;
            padding: 0 0.1rem;
            border-radius: 0.06rem;
        }
    }
}
</style>

