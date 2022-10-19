import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//
// import './assets/test_styles/main.css'
//
// we have a problem with sass loader
// import './assets/styles/style.scss'
//
import './assets/styles/style.min.css'

createApp(App).use(router).mount('#app')
