import * as Vue from "vue"
import App from "./App.vue"

 //Vue.createApp(App).mount('#app');
const wc = Vue.defineCustomElement(App);
 customElements.define('vue-helloworld', wc);