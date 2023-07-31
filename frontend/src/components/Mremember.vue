<template>
    <div class="w-[350px] h-[20px] flex space-x-3  ">
        <input type="checkbox" class="h-[20px] w-[20px]">
        <label>{{ label }}</label>
    </div>
</template>
<script setup lang="ts">
defineProps<{  label: string }>();

</script>
