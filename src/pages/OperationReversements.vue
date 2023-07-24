<script setup lang="ts">
import { useRouter } from "vue-router";
import { useReversementStore } from "../store/reversement";
const store = useReversementStore();
const reversement=store.reversement ;
const router = useRouter();
function onSubmit() {
  router.push({ name: "operation-successfully" });
  console.log("opération-reversement");
}

</script>
<template>
  <div class="px-60">
    <div class="flex mt-12">
      <p class="text-[18px] px-4 p-1 font-bold">Opération de reversement</p>
      <button
        class="border-yellow-500 bg-yellow-100 border-2 border-b text-[12px] text-yellow-500 rounded-xl px-3 p-1"
      >
        En attente
      </button>
    </div>
    <div class="border-2 rounded border-blue-400 px-2 mt-3 w-[645px] h-36">
        <p class="px-2 font-bold text-[24px]" >{{ reversement.totalamount }} Fcfa</p>
        <p class="px-2 py-1 text-[18px]">Pour <b class="text-blue-500 ">Open SI SAS</b> </p>
        <div class="relative ">
            <img src="/src/assets/images/card.png" class="px-2 absolute top-0.5" />
        <p class="  text-[16px] px-9">Carte Bancaire</p>
    </div>
        <p class="px-2 text-[16px]">{{ reversement.reference }}</p>
    </div>
    <div class="py-5">
    <div class="w-[645px] mt-5 h-1 bg-blue-100"></div></div>
    <div class="mt-8 relative">
      <label for="" class="relative text-[16px] ">Date du reversement</label> <br />
      <input
        type="text"
        class="border-2 rounded border-blue-200 px-8 w-[645px] h-10"
      placeholder="bordereau_de_caisse.pdf ">
      <div class="absolute top-9">
      <img src="/src/assets/images/calendar-outline.png" class="px-3 " /></div>
    </div>
    <div class="text-blue-500 mt-2 underline">
      <a href="#">Modifier la date de reversement</a>
    </div>

    <div class="mt-4 relative ">
      <label class="relative text-[16px]">Bordereau de reversement</label>
      <span class="block py-1"></span>
      <input
        type="text"
        class="border-2 rounded border-blue-200 w-[645px] h-10"
      />
      <div class="absolute top-10">
      <img src="/src/assets/images/document-attach.png" class="px-2 " /></div>
    </div>
    <div class="mt-10">
      <label for="" class="text-[16px]">Commentaires</label> <br />
      <input
        type="text"
        class="border-2 rounded border-blue-200 w-[645px] h-28"
      />
    </div>
  </div>
  
  <div class="px-96 mt-10 flex justify-between">
  <div class="flex justify-center space-x-4">
    <div class="rounded border-2 border-gray-400 w-60 h-10  py-2 w-full flex justify-center">
    <button type="submit" class="flex justify-center items-center text-white">
        <p class="text-black">Annuler</p>
      
    </button>
  </div>
  </div>  
  <form @submit.prevent="onSubmit()">
   <div class="px-6">
    <div class="rounded border-1 bg-green-500  py-2 w-60 h-10 flex justify-center">
    <button type="submit" class="flex  items-center text-white">
        
    <img src="/src/assets/images/checkmark-done.png" class="px-2" />
    <p>Confirmer le reversement</p>
    </button>

    
  </div>
  </div></form>
  </div>
</template>
