<template>
<div>
    <iframe
      :src="path"
      frameborder="0"
    ></iframe>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {

  },
  computed: {
    ...mapGetters([
      'menu', 'dark'
    ]),
    path () {
      const type = this.$route.params.type
      const path = (this.menu.find(val => val.label === type) || {}).path
      if (path) {
        return `${path}&dark=${this.dark}`
      }
      return null
    }
  }
}
</script>
<style lang="scss" scoped>
  div {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 0 0 0 0;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>
