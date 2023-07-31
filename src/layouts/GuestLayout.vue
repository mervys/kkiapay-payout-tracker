<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="bg-white w-screen py-4 flex justify-center">
      <img src="/src/assets/images/logo.png" alt="" />
    </div>
    <div class="flex-1 flex items-center justify-center">
      <div class="flex justify-center items-center">
        <div class="bg-white py-6 px-4">
          <router-view> </router-view>
        </div>
      </div>

    </div>
  </div>
</template>