<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
            src="//img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_600x330_1e844ffa.jpg" />
            <div class="banner-info">
                <div class="banner-title">
                    武汉欢乐谷(AAAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    32
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="hangleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_r_800x800_783c5752.jpg',
        'http://img1.qunarzz.com/sight/p0/1603/b4/b46beb878de0804a90.img.jpg_r_800x800_ff224bd2.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    hangleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding 0 .4rem
        height: .32rem
        line-height: .32rem
        height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
