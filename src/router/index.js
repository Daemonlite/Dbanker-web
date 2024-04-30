import { createRouter,createWebHistory } from "vue-router";
import Landing from '../components/Landing.vue'
import About from '../components/About.vue'
import Pricing from '../components/Pricing.vue'
import Services from '../components/Services.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import RequestService from '../pages/RequestService.vue'


const routes = [
       {
        path:"/",
        component:DefaultLayout,
        children:[
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
               },
               {
                path:"/request-service",
                name:"request-service",
                component:RequestService
               }
        ]
       }
]


const router = createRouter({
    history:createWebHistory('https://dbanker.netlify.app'),
    routes
})

export default router