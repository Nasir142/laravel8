import { createApp } from "vue";
import App from "./components/App.vue";
import Toaster from "@meforma/vue-toaster";
import router from "./router";
import store from "./store";
import axios from "axios";
require("./store/subscriber");

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toaster);
store.dispatch("ATTEMPT", localStorage.getItem("token")).then(() => {
    app.mount("#app");
});
