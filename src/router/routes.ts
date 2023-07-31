import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import ExpiredLink from "../pages/ExpiredLink.vue";
import ConsultMail from "../pages/ConsultMail.vue";
import PasswordModify from "../pages/PasswordModify.vue";
import CreateAccount from "../pages/CreateAccount.vue";
import ExistAccount from "../pages/ExistAccount.vue";
import ReinitialisePassword2 from "../pages/ReinitialisePassword2.vue";
import ReinitialisePassword from "../pages/ReinitialisePassword.vue";
import ConsultMail2 from "../pages/ConsultMail2.vue";
import DashBoardLayout from "../layouts/DashBoardLayout.vue";

import Root from "../pages/Menu.vue";
import Root1 from "../pages/CreateAccount.vue";
import OperationSuccessfully from "../pages/OperationSuccessfully.vue";
import OperationReversements from "../pages/OperationReversements.vue";
import Invoice from "../pages/Invoice.vue";
import MarchandSpace from "../pages/MarchandSpace.vue";
import MarchandSpace1 from "../pages/MarchandSpace1.vue";
import MarchandSpace2 from "../pages/MarchandSpace2.vue";
import MarchandSpace3 from "../pages/MarchandSpace3.vue";
import MarchandSpace4 from "../pages/MarchandSpace4.vue";
import MarchandSpace7 from "../pages/MarchandSpace7.vue";
import MarchandSpace8 from "../pages/MarchandSpace8.vue";
import MarchandSpace9 from "../pages/MarchandSpace9.vue";
import MarchandSpace10 from "../pages/MarchandSpace10.vue";
import MarchandSpace11 from "../pages/MarchandSpace11.vue";
import GuestLayout from "../layouts/GuestLayout.vue";

const routes = [
  {

    path: "/",
    component: DashBoardLayout,
    children: [
      {
        path: '',
        component: Root,
        meta: { title: "Home" },
      },
      {
        path: 'marchand-space1',
        component: MarchandSpace1,
        meta: { title: "Nouveau reversement" },
      }, {
        path: 'marchand-space2',
        component: MarchandSpace2,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space3',
        component: MarchandSpace3,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space4',
        component: MarchandSpace4,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space7',
        component: MarchandSpace7,
        meta: { title: "Nouveau reversement" },
      }, {
        path: 'marchand-space8',
        component: MarchandSpace8,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space9',
        component: MarchandSpace9,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space10',
        component: MarchandSpace10,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'marchand-space11',
        component: MarchandSpace11,
        meta: { title: "Nouveau reversement" },
      },
      {
        path: 'operation-reversements',
        component: OperationReversements,
        meta: { title: "Reversement" },
      },
      {
        path: 'operation-sucessfully',
        component: OperationSuccessfully,
        meta: { title: "Reversement" },
      },
    ]
  },

  {
    path: "/auth",
    component: GuestLayout,
    children:
      [
        {
          path: '',
          component:CreateAccount,
        },
      ]
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router