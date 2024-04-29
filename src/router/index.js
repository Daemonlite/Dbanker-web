import { createRouter,createWebHistory } from "vue-router";
import Landing from '../components/Landing.vue'

const routes = [
       {
        path:"/",
        name:"landing",
        component:Landing
       }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router