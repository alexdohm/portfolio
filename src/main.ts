import {createApp} from 'vue'
import App from './App.vue'
import './styles/global.sass'
import router from './router/router'

export const app = createApp(App);
app.use(router);
app.mount("#app");
