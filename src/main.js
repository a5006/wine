import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import 'axios'
import httpReq from  '@/utils/httpRequest.js'
import mixins from './utils/mixins'
//全局组件
import install from './globalComponents/index.js'
if (process.env.NODE_ENV == 'development') {
  Vue.config.devtools = true;
} else {
  Vue.config.devtools = false;
}
Vue.use(install)
mixins(Vue)
Vue.prototype.$ajax = httpReq;
Vue.config.productionTip = false
import { Lazyload } from 'vant';
Vue.use(Vant);
Vue.use(Lazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
