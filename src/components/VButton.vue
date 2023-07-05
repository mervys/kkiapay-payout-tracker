<template>
  <div class="rounded border-2 bg-red-500 h-10 w-full flex justify-center">
    <div class="flex justify-center items-center text-white py-3">
      {{ label }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ label: string }>();
</script>
