import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path:'/',
            name:'home',
            component: Home
         },
         
    ]
} )