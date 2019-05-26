<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        data: this.data
      })
    },
    enable () {
    /* eslint-disable */
    //当前scroll是否处于启用状态
      this.scroll && this.scroll.enable()
    },
    disable () {
    /* eslint-disable */
    //禁用 better-scroll
      this.scroll && this.scroll.disable()
    },
    refresh () {
    /* eslint-disable */
    //刷新的时候重新计算scroll的高度
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
<style lang="stylus">

</style>
