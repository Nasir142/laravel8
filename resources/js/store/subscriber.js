import Axios from "axios";
import store from "./index";

store.subscribe((mutations) => {
    switch (mutations.type) {
        case "SET_TOKEN":
            if (mutations.payload) {
                Axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${mutations.payload}`;
                localStorage.setItem("token", mutations.payload);
            } else {
                Axios.defaults.headers.common["Authorization"] = null;
                localStorage.removeItem("token");
            }
            break;
    }
});
