import {createApp} from 'vue'
import {Quasar} from 'quasar'
import App from './App.vue'
import './styles/global.sass'
import router from './router/router'

// Import quasar icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons/material-icons.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import 'quasar/src/css/index.sass'

export const app = createApp(App);
app.use(router);
app.use(Quasar, {
    plugins: {},
});
app.mount("#app");
