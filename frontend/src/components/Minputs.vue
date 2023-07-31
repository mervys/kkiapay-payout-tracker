<template>
    <div class="w-[646px] h-[68px]  ">

        <div class="mt-2 ">{{ label }}</div>
        <div class=" w-[646px]  bg-slate-50 rounded h-[42px] border-2 border-blue-100 flex items-center">
            <div class="px-2">
                <div class="w-[594px] h-[24px] ">
                    <p>{{ value }}</p>
                </div>
            </div>
            <img src="../assets/images/Vector (Stroke).svg" class="w-[13px] h-[7px]">
        </div>


    </div>
</template>
<script setup lang="ts">
defineProps<{ label: string, value: any }>();
</script>