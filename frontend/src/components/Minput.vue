<template>
  <div class="w-[646px] h-[68px]">
    <div class="mt-2">{{ label }}</div>
    <div
      class="w-[646px] bg-slate-50 rounded h-[42px] border-2 border-blue-100 flex items-center"
    >
      <p class="p-3">{{ value }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string;
  value: string | Number | null;
}>();
</script>
