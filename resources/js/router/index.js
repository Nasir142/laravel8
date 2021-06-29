import { createRouter, createWebHistory } from "vue-router";
import VueRouteMiddleware from "vue-route-middleware";
import auth from "../middleware/auth";
import guest from "../middleware/guest";
import { BaseUrl } from "../settings";

const routes = [
    {
        name: "login",
        path: "/login",
        component: () => import("../views/login.vue"),
        meta: {
            middleware: [guest],
        },
    },
    {
        name: "register",
        path: "/register",
        component: () => import("../views/register.vue"),
        meta: {
            middleware: [guest],
        },
    },
    {
        name: "dashboard",
        path: "/",
        component: () => import("../views/dashboard.vue"),
        meta: {
            middleware: [auth],
        },
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("../views/NotFound.vue"),
        name: "NotFound",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(VueRouteMiddleware());

export default router;
