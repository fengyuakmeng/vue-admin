import { createApp } from 'vue'
import router from "./router"
import App from './App.vue'
import "./assets/less/index.less"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from "./store/index.js"
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(ElementPlus)
app.use(router).use(store)
app.mount('#app')
