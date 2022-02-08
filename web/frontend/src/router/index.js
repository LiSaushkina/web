import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home"
import Menu from "@/views/Menu"
import MenuItemPage from "@/components/MenuPage/MenuItemPage";
import Delivery from "@/views/Delivery";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu,
        children: [
            {
                path: 'coffee',
                component: MenuItemPage
            },
            {
                path: 'tea',
                component: MenuItemPage
            },
            {
                path: 'baked',
                component: MenuItemPage
            }
        ]
    },
    {
        path: '/Delivery',
        name: 'Delivery',
        component: Delivery
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
