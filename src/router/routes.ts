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

import Menu from "../pages/Menu.vue";
import Reversements1 from "../pages/Reversements1.vue";
import OperationSuccessfully from "../pages/OperationSuccessfully.vue";
import Reversements2 from "../pages/Reversements2.vue";
import OperationReversements from "../pages/OperationReversements.vue";
import Invoice from "../pages/Invoice.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { layout: "guest" },
    },

    {
      path: "/expired-link",
      name: "expired-link",
      component: ExpiredLink,
      meta: { layout: "guest" },
    },

    {
      path: "/consult-mail",
      name: "consult-mail",
      component: ConsultMail,
      meta: { layout: "guest" },
    },

    {
      path: "/create-account",
      name: "create-account",
      component: CreateAccount,
      meta: { layout: "guest" },
    },

    {
      path: "/exist-account",
      name: "exist-account",
      component: ExistAccount,
      meta: { layout: "guest" },
    },

    {
      path: "/password-modify",
      name: "password-modify",
      component: PasswordModify,
      meta: { layout: "guest" },
    },

    {
      path: "/Reinitialise-password2",
      name: "reinitialise-password2",
      component: ReinitialisePassword2,
      meta: { layout: "guest" },
    },

    {
      path: "/Reinitialise-password",
      name: "reinitialise-password",
      component: ReinitialisePassword,
      meta: { layout: "guest" },
    },

    {
      path: "/Consult-mail2",
      name: "consult-mail2",
      component: ConsultMail2,
      meta: { layout: "guest" },
    },

    {
      path: "/menu",
      name: "menu",
      component: Menu,
      meta: { layout: "dashboard", title: "Home" },
    },

    {
      path: "/Operation-successfully",
      name: "operation-successfully",
      component: OperationSuccessfully,
      meta: { layout: "dashboard" },
    },

    {
      path: "/Reversements1",
      name: "reversements1",
      component: Reversements1,
      meta: { layout: "dashboard" },
    },

    {
      path: "/Reversements2",
      name: "reversements2",
      component: Reversements2,
      meta: { layout: "dashboard" },
    },

    {
      path: "/Operation-reversements",
      name: "operation-reversements",
      component: OperationReversements,
      meta: { layout: "dashboard" },
    },

    {
      path: "/Invoice",
      name: "invoice",
      component: Invoice,
      meta: { layout: "dashboard" },
    },
  ],
});

export { router };
