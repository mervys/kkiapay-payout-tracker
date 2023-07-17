<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="flex h-screen overflow-hidden ">
    <div class="flex-col h-full w-[350px] bg-blue-950">
      <div class="bg-blue-950  py-2 h-24">
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
    <div class="bg-slate-50  w-screen h-screen overflow-hidden ">
      <div class="flex justify-between">
        <div class="p-4 font-bold">{{ title }}</div>
        <div class="flex px-46 p-4 gap-4">
          <img src="/src/assets/images/Avatar.png" />
          <p>
            Nadege <br />
            Enabel
          </p>
        </div>
      </div>
      <div class="h-full w-full overflow-y-auto">
        <slot />
      </div>
      
    </div>
  </div>
</template>
