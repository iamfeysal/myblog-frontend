import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store/index";

// import 'bootstrap/dist/css/bootstrap.min.css'

import "./assets/default.css";
import "./assets/layout.css";
import "./assets/style.css";
import "./assets/media-queries.css";
import "./assets/font-awesome/css/font-awesome.css";
import "./assets/font-awesome/css/font-awesome.min.css";
// import "./assets/bootstrap.min.css"

// import "./assets/js/main.js"

createApp(App).use(router, store).mount('#app')
