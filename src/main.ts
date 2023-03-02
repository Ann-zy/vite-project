import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

import {
    Toast,
} from 'vant'

const app = createApp(App)
app.use(Toast)

app.config.globalProperties.$toast = Toast

//系统错误捕获
const errorHandler = (error, vm) => {
    console.error('抛出全局异常');
    console.error(vm);
    console.error(error);
}
app.config.errorHandler = errorHandler

app.use(router).use(store).mount('#app')
