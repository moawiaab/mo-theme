import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import  Link  from "./components/Link.vue";

const app = createApp(App);
app.component("Link", Link);
app.mount("#app");
