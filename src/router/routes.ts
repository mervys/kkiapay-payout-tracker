import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import ExpiredLink from '../pages/ExpiredLink.vue'
import ConsultMail from '../pages/ConsultMail.vue'
import PasswordModify from '../pages/PasswordModify.vue'

import CreateAccount from '../pages/CreateAccount.vue'
import ExistAccount from '../pages/ExistAccount.vue'
import ReinitialisePassword2 from '../pages/ReinitialisePassword2.vue'
import ReinitialisePassword from '../pages/ReinitialisePassword.vue'
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
            path:'/create-account',
            name:'CreateAccount',
            component: CreateAccount
         },


         { 
            path:'/exist-account',
            name:'ExistAccount',
            component: ExistAccount
         },

         { 
            path:'/password-modify',
            name:'PasswordModify',
            component: PasswordModify
         },

       {
          path: '/Reinitialise-password2',
          name: 'ReinitialisePassword2',
          component: ReinitialisePassword2
       },

       {
         path: '/Reinitialise-password',
         name: 'ReinitialisePassword',
         component: ReinitialisePassword
      }

         
    ]
} )

export {router}