import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css';

const app = createApp(App)
app.config.productionTip = false;

app.mount('#app')
