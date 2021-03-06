import axios from 'axios'
import store from '@/store/index.js'
// import router from '../router'

const httpReq = axios.create();
httpReq.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : "https://jhhy.vsapp.cn/mobile";
httpReq.defaults.timeout = 5000;
// httpReq.defaults.headers['Cookie'] = 'openid=oOJiRuHxe1nCyEGQvcl8Gk0ExCs0  '
httpReq.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
httpReq.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// 请求拦截

function forMatData(config){
  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    let obj = config.data
    let str = ""
    for (var k in obj) {
      str += `${k}=${obj[k]}&`
    }
   str= str[str.length-1]==='&'?str.slice(0,str.length-1):str
    config.data = str
  }
}

httpReq.interceptors.request.use((config) => {
  config.headers = Object.assign({}, config.headerss, httpReq.defaults.headers.post)
  forMatData(config)
  store.commit('setLoading', true);
  return config
}, (err) => {
  alert('网络错误')
  store.commit('setLoading', false);
  return Promise.reject(err);
})

httpReq.interceptors.response.use((res) => {
  store.commit('setLoading', false);
  return { ...res.data,randomKey:Math.random()*10}
}, err => {
    store.commit('setErr', true)
    setTimeout(() => {
      store.commit('setErr', false)
    }, 3000);
  store.commit('setLoading', false);
  if (err.response) {
    if (err.response.status == 401) {
      // 如果返回401 即没有权限，跳到登录页重新登录
      alert('请重新登录');
      // router.replace({
      //   path: 'login',
      //   query: {redirect: router.currentRoute.fullPath}
      // })
    }
  }

  return Promise.reject(err);
})

export default httpReq
