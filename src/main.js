
import '/css/webflow.css';
import'/css/normalize.css';



import { createApp } from 'vue'

import router from './router.js';
import store from './Store/index.js';
import App from './App.vue';


const app = createApp(App);


app.use(store);
app.use(router);



app.mount('#app');
