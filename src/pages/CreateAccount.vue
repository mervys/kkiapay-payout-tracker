<template>
  <div class="flex-col">
    <div class="flex justify-center font-bold text-2xl text-blue-900 mt-4">
      Créez Votre Compte
    </div>

    <div class="flex justify-center">
      <div class="py-3">
        <p class="flex justify-center">
          Rejoignez l'entreprise <b class="px-1">Open SI SAS</b> sur la
          plateforme de suivi
        </p>
        <p class="flex justify-center mr-4.3">
          des reversements <b class="px-1"> Payout tracker</b> en tant que :
          <b class="text-red-600 px-1"> Financier</b> !
        </p>
      </div>
    </div>

    <div class="flex flex-col px-4 py-2">
      <div class="relative flex justify-center flex-col py-2">
        <form @submit.prevent="onSubmit()">
          <div class="flex flex-col px-10  gap-4">
            <VInput type="password" label="Mot de passe" />
            <VInput type="password" label="Confirmer votre mot de passe " />
            <div></div>

            <VButton label="Réinitialiser" />
          </div>

          <!--<label class="ml-5">
    Mot de passe 
   </label>
   <div class=" flex py-3 ml-5">
   <input type ="password" class="border-2 w-[435px] h-10">
   <img src="Vector.png" class="h-5 absolute ml-[395px] mt-[10px]">
   </div>
   
  
   <div class=" flex justify-center flex-col">
    <label class=" ml-5">
    Confirmer votre mot de passe
   </label>
   <div class=" relative flex py-2 ml-5">
    <input type ="password" class="border-2  border-t w-[435px] h-10">
    <img src="Vector.png"  class="h-5 absolute ml-[395px] mt-[10px]">
   </div>
   </div>
  
  <div class="flex justify-center py-4">
  <button type="submit" class=" rounded-md bg-red-600 w-[435px] h-10 text-white flex justify-center items-center r">
    Réinitaliser
  </button>
  </div>-->
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import VButton from "../components/VButton.vue";
import VInput from "../components/VInput.vue";
const router = useRouter();
function onSubmit() {
  router.push({ name: "exist-account" });
  console.log("create-account");
}
</script>
