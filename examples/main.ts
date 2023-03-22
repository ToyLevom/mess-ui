import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MessUI from "../packages";
console.log(MessUI, 'MessUI')

createApp(App).use(MessUI).mount("#app");
