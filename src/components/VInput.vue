<template>
  <label class="block px-10 w-96 h-96">
    <span class="block text-sm py-3">{{ label }}</span>
    <input
      :type="type"
      class="rounded border-2 border-indigo-500/50 w-[402px] h-10"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{ type: string; label: string }>();
</script>
