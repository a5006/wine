

const methodsObj ={
  // 格式化图片
formatImg(img){
  if(img.indexOf("/upload/")>-1){
    return `https://jhhy.vsapp.cn${img}`
  }
  else{
    return `https://jhhy.vsapp.cn/upload/${img}`
  }
},
// 格式化时间

formatTime(time){
  return time*1000
},
formatDate(time){
  time = time*1000
  let date=new Date(time)
let year = date.getFullYear()
let day = date.getDate()
let month = date.getMonth()+1
let hour = date.getHours()
let minit = date.getMinutes()
  return `${year}-${month}-${day} ${hour}:${minit}`
},
// 格式化文章
  formatContent(oriContent) {
    let content = `<div style="font-size:24px" > ${oriContent} </div>`
    content = content
      .replace(/\n/g, '<br/>')
      .replace(/font-size:\d+px/g, function () {
        const arg = Array.from(arguments)
        let fs = arg[0].match(/\d+/)[0] / 75
        return `font-size:${fs}rem`
      })
    content = content.replace(/<img\s+src="\//,'<img src="https://jhhy.vsapp.cn/')
    return content.replace(/\s/g, ' &nbsp ')
  },
// 格式化金额
  formatPrice(num) {
    return parseFloat(num) / 100
  },
  
}
function vueMixins(Vue){
  Vue.mixin({
    methods: methodsObj
  })
}
export default vueMixins