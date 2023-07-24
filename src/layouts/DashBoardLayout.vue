<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <div class="flex-col h-full w-[350px] bg-blue-950">
      <div class="bg-blue-950 py-2 h-24">
        <img src="/src/assets/images/Base.svg" />
      </div>

      <div class="h-12 flex items-center">
        <div class="flex">
          <img src="/src/assets/images/home.png" class="px-3" /><a
            href="#"
            class="text-white"
            >Home</a
          >
        </div>
      </div>
      <div class="h-12 flex items-center">
        <div class="flex">
          <img src="/src/assets/images/Reversements.png" class="px-3" /><a
            href="#"
            class="text-white"
            >Nouveau reversement</a
          >
        </div>
      </div>
      <div class="h-12 flex items-center">
        <div class="flex">
          <img src="/src/assets/images/Reversements.png" class="px-3" /><a
            href="#"
            class="text-white"
            >Reversements</a
          >
        </div>
      </div>
      <div class="h-12 flex items-center">
        <div class="flex">
          <img src="/src/assets/images/entypo_log-out.png" class="px-3" /><a
            href="#"
            class="text-white"
            >Déconnexion</a
          >
        </div>
      </div>
    </div>
    <div class="bg-slate-50 w-screen h-screen overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="p-[18px] font-bold">{{ title }}</div>
        <div class="flex items-center mr-[40px]">
          <div class="relative">
            <div
              class="text-white border-white border-2 bg-red-500 w-[20px] h-[20px] rounded-full p-[10px] flex justify-center items-center absolute -left-3 top-1/2 -translate-y-1/2"
            >
              3
            </div>
          
          <img src="/src/assets/images/nadege.png" class=" w-[40px] h-[40px]" /></div>
          <div class="text-center pl-[8px]">
            <p class="font-semibold">Nadege</p>
            <p>Enabel</p>
          </div>
        </div>
      </div>
      <div class="h-full w-full overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
