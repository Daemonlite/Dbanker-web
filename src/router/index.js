import { createRouter,createWebHistory } from "vue-router";
import Landing from '../components/Landing.vue'
import About from '../components/About.vue'
import Pricing from '../components/Pricing.vue'
import Services from '../components/Services.vue'


const routes = [
       {
        path:"/",
        name:"landing",
        component:Landing
       },
       {
        path:"/about",
        name:"about",
        component:About
       },
       {
        path:"/pricing",
        name:"pricing",
        component:Pricing
       },
       {
        path:"/services",
        name:"services",
        component:Services
       }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router