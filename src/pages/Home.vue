<script setup lang="ts">
import { useRouter } from "vue-router";
import VButton from "../components/VButton.vue";
import VInput from "../components/VInput.vue";
const router = useRouter();
function onSubmit() {
  router.push({ name: "consult-mail2" });
  console.log("home");
}
</script>

<template>
  <div>
    <div class="bg-white w-[509px] h-80 rounded border-1">
      <h1 class="text-blue-950 flex justify-center font-bold py-3">
        Me connecter
      </h1>

      <form @submit.prevent="onSubmit()">
        <div class="flex flex-col px-10 gap-6">
          <VInput type="text" label="Adresse Mail" />
          <VInput type="password" label="Mot de passe " />
          <VButton label="Se Connecter" />
        </div>
      </form>
    </div>
    <a
      href="Mot de passe oublié ?"
      class="text-blue-600 flex justify-center underline hover:underline-offset-4"
    >
      Mot de passe oublié ?
    </a>
  </div>
</template>
