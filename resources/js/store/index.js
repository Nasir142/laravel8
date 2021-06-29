import { createStore } from "vuex";
import auth from "./modules/auth";

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        auth,
    },
});

export default store;
