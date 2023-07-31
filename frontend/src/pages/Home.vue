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
    <div class="bg-white w-[510px] h-82 rounded border-1">
      <h1 class="text-blue-950 flex justify-center font-bold py-6">
        Me connecter
      </h1>

      <form @submit.prevent="onSubmit()">
        <div class="flex flex-col px-10 gap-4">
          <VInput type="text" label="Adresse Mail" class="" />
          <VInput type="password" label="Mot de passe " />
          <VButton label="Se Connecter" class="" />
        </div>
      </form>
    </div>
    <a
      href="Mot de passe oublié ?"
      class="text-blue-600 flex justify-center underline hover:underline-offset-4 py-3"
    >
      Mot de passe oublié ?
    </a>
  </div>
</template>
