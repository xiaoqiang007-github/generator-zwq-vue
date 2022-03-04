import { createApp } from 'vue'
import App from './App.vue'
// eslint-disable-next-line
import $utils from './assets/common/utils'

// window.$utils = $utils

// App.prototype.$utils = $utils 
console.log($utils)

let app = createApp(App)
// app.prototype.$utils = $utils
app.config.globalProperties.$utils = $utils;
app.mount('#app')
