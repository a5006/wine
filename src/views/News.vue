<template>
  <div>
    <Gheader title="详情" back="1" />

    <div class="space_container content" v-if="helpDetail.title">
      <p class="title">{{helpDetail.title}}</p>
      <p class="article" v-html="helpDetail.content"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'news',
  data() {
    return {}
  },
  methods: {
    formatContent(oriContent) {
      let content = `<div style="font-size:24px" > ${oriContent} </div>`
      content = content
        .replace(/\n/g, '<br/>')
        .replace(/font-size:\d+px/g, function() {
          const arg = Array.from(arguments)
          let fs = arg[0].match(/\d+/)[0] / 75
          return `font-size:${fs}rem`
        })
      // content = content.replace(/<img\s+src="\//,'<img src="https://jhhy.vsapp.cn/')
      return content.replace(/\s/g, ' &nbsp ')
    },
    queryNews() {
      let { id, type } = this.$route.query
      switch (type) {
        case 'assist':
          this.$store.dispatch('getHelpDetail', {
            id
          })
          break
        case 'retail':
          this.$store.dispatch('getDoc', {
            type: 'lsq'
          })
          break
        case 'agent':
          this.$store.dispatch('getDoc', {
            type: 'dlq'
          })
          break
        case 'sale':
          this.$store.dispatch('getDoc', {
            type: 'js'
          })
          break;
        default:
          break
      }
    }
  },
  computed: {
    helpDetail() {
      let { title, content } = this.$store.state.helpDetail
      content = this.formatContent(content)
      return { title, content }
    },
    doc(){
      return this.$store.state.doc
    }
  },
  watch: {
    helpDetail(data) {
      console.log(data, 'datta')
    },
    doc(doc){
      console.log(doc)
    }
  },
  mounted() {
    this.queryNews()
  }
}
</script>
<style scoped>
.content {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 0.4rem;
  box-sizing: border-box;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.title {
  text-align: center;

  font-size: 0.4rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(231, 0, 2, 1);
  line-height: 50px;
}
.article {
  font-size: 24px;
  color: #333;
}
</style>