<script setup lang="ts">
import { useRouter } from "vue-router";
</script>
<template>
  <div class="px-60">
    <div class="flex py-10">
      <p class="text-sm/[18px] px-4 p-1 font-bold">Opération de reversement</p>
      <button
        class="border-yellow-500 bg-yellow-100 border-2 border-b text-sm/[12px] text-yellow-500 rounded-xl px-3 p-1"
      >
        En attente
      </button>
    </div>
    <div class="border-2 rounded border-blue-400 w-[645px] h-36"></div>
    <div class="py-8">
      <label for="" class="text-sm/[16px]">Date du reversement</label> <br />
      <input
        type="Date"
        class="border-2 rounded border-blue-200 w-[645px] h-10"
      />
    </div>
    <div class="text-blue-500 underline">
      <a href="#">Modifier la date de reversement</a>
    </div>
    <div class="py-4">
      <label for="" class="text-sm/[16px]">Bordereau de reversement</label>
      <br />
      <input
        type="text"
        class="border-2 rounded border-blue-200 w-[645px] h-10"
      />
    </div>
    <div class="py-16">
      <label for="" class="text-sm/[16px]">Commentaires</label> <br />
      <input
        type="text"
        class="border-2 rounded border-blue-200 w-[645px] h-28"
      />
    </div>
  </div>
</template>
