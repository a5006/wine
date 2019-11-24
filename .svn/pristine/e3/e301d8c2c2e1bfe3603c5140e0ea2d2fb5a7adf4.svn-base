<template>
  <div>
    <p v-html="renderContent" ref="article" id="article"></p>
  </div>
</template>
<script>
export default {
  props: ['content'],
  data() {
    return {}
  },
methods:{
  resetImg(){
        const img = this.$refs.article.querySelectorAll('img')
    img.forEach(item => {
      item.style.maxWidth = '100%'
    })
  }
},
  computed: {
    renderContent() {
      let s = this.content
        .replace(/\n/g, '<br/>')
        .replace(/font-size:\d+px/g, function() {
          const arg = Array.from(arguments)
          let fs = arg[0].match(/\d+/)[0] / 75
          return `font-size:${fs}rem`
        })
      s.replace(/\s/g, ' &nbsp ')
      return s
    }
  },

  updated() {
this.resetImg()
  }
}
</script>
<style scoped>
#article img {
  max-width: 100%;
}
</style>