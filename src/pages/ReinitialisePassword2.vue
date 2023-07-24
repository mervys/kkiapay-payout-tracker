<template>

      
      <div class ="  flex justify-center items-center h-screen ">
       <div class="bg-white w-[570px] h-[370px]  flex-col ">
    
        
        <div class="flex justify-center mt-6">
       <img src="Min.png">
       </div>
       <div class="py-2 text-2xl text-blue-950 flex justify-center font-bold ">
        <p>Réinitialiser votre mot de passe</p>
       </div>
    
    <form @submit.prevent="onSubmit()">
     <div class=" flex-col px-3 py-1 ">
      
     <div class=" relative  flex-col py-2">
      <div class="px-28 py-2">
      <VInput type="text" label="Adresse Mail" /></div>
      <div class="py-2 ">
          <VInput type="password" label="Mot de passe " /></div>
          <div class="py-6 px-14">
          <VButton label="Se Connecter" /></div>
      <!--<label class="ml-8">
      Mot de passe 
     </label>
     <div class=" flex py-3 ml-8">
     <input type ="password" class="border-2 w-[485px] h-10">
     <img src="Vector.png" class="h-5 absolute ml-[440px] mt-[10px]">
     </div>
     </div>
    
     <div class="">
      <label class=" ml-8">
      Confirmer votre mot de passe
     </label>
     <div class=" relative flex py-2 ml-8">
      <input type ="password" class="border-2  border-t w-[485px] h-10">
      <img src="Vector.png"  class="h-5 absolute ml-[440px] mt-[10px]">
     </div>
     </div>
    
    <div class="flex justify-center py-5">
    <button type="submit" class=" rounded-md bg-red-600 w-[485px] h-10 text-white flex justify-center items-center r">
      Réinitaliser
    </button>-->
    </div>
    </div>
    </form>
    
      </div>
      </div>
    
    </template>
    <script setup lang="ts">
import { useRouter } from "vue-router";
import VButton from "../components/VButton.vue";
import VInput from "../components/VInput.vue";
const router = useRouter();
function onSubmit() {
  router.push({ name: "password-modify" });
  console.log("reinitialise-password2");
}
</script>