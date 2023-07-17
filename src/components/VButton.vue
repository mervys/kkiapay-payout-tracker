<template>
  <div class="rounded border-1 bg-red-500  py-2 w-full flex justify-center">
    <button type="submit" class="flex justify-center items-center text-white">
      {{ label }}
    </button>
  </div>
</template>
<script setup lang="ts">
defineProps<{ label: string }>();
</script>
