import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import ExpiredLink from '../pages/ExpiredLink.vue'
import ConsultMail from '../pages/ConsultMail.vue'
import PasswordModify from '../pages/PasswordModify.vue'
const router=createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path:'/',
            name:'home',
            component: Home
         },

         { 
            path:'/expired-link',
            name:'ExpiredLink',
            component: ExpiredLink
         },

         { 
            path:'/consult-mail',
            name:'ConsultMail',
            component: ConsultMail
         },

         { 
            path:'/password-modify',
            name:'PasswordModify',
            component: PasswordModify
         },


         
         
    ]
} )

export {router}