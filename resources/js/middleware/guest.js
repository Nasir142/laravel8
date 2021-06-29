import store from "../store";

export default (to, from, next) => {
    let auth = store.getters.authenticated;
    if (auth) {
        next({ name: "dashboard" });
    }
};
