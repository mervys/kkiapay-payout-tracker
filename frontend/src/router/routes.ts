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
import SuccesReversement from "../pages/SuccesReversement.vue";


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
      meta: { layout: "dashboard", title: "Reversements" },
    },

    {
      path: "/Operation-reversements",
      name: "operation-reversements",
      component: OperationReversements,
      props: true,
      meta: { layout: "dashboard", title: "Reversements" },
    },

    {
      path: "/Invoice",
      name: "invoice",
      component: Invoice,
    },
    {
      path: "/Marchand-space",
      name: "marchand-space",
      component: MarchandSpace,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space1",
      name: "marchand-space1",
      component: MarchandSpace1,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space2",
      name: "marchand-space2",
      component: MarchandSpace2,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space3",
      name: "marchand-space3",
      component: MarchandSpace3,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space4",
      name: "marchand-space4",
      component: MarchandSpace4,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space7",
      name: "marchand-space7",
      component: MarchandSpace7,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space8",
      name: "marchand-space8",
      component: MarchandSpace8,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space9",
      name: "marchand-space9",
      component: MarchandSpace9,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space10",
      name: "marchand-space10",
      component: MarchandSpace10,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Marchand-space11",
      name: "marchand-space11",
      component: MarchandSpace11,

      meta: { layout: "dashboard", title: " Nouveau reversment" },
    },
    {
      path: "/Succes-reversement",
      name: "succes-reversement",
      component: SuccesReversement,

      meta: { layout: "dashboard", title: " Reversment" },
    },
  ],
});

export { router };
