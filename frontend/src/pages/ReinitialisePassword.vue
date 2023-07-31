<template>
    
    <div class ="  flex-col flex justify-center items-center h-screen ">
     <div class="bg-white w-[570px] h-[280px]  flex-col ">

        <div class="flex justify-center mt-5">
     <img src="Man.png" class="mt-4">
     </div>
     <div class="flex justify-center py-2">
        <p class="text-2xl font-bold text-blue-950">Réinitialiser votre mot de passe</p>
     </div>
     
     <div class="py-4 flex-col flex justify-center">
                <form @submit.prevent="onSubmit()">
        <label class="ml-12 ">
            Adresse Mail
        </label>
        <div class="py-1">
        <input type="text" class="border-2 rounded px-36 py-2 ml-12 ">
        </div>
        
        <div class="py-5 flex justify-center">
        <button type="submit" class="h-10 w-[480px] bg-red-500 flex items-center justify-center rounded">
            <p class=" text-white">
                Réinitialiser
            </p>
        </button>

        </div></form>


     </div>
    </div>

        <div class="py-5">
           <p><b>Votre mot de passe vous revient ?</b>
            <a href="#" class="px-1 text-blue-800 font-bold underline decoration1">Se connecter</a></p>
        </div>

        </div>

    
      
     
  </template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
function onSubmit() {
  router.push({ name: "consult-mail" });
  console.log("rienitialise-account");
}
</script>