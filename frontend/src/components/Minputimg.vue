<template>
    <div class="w-[646px] h-[68px]  ">

        <div class="mt-2 ">{{ label }}</div>
        <div class=" w-[646px] flex  bg-slate-50 rounded h-[42px] border-2 border-blue-100 flex items-center">
         <div class="w-[22px] h-[15px] ml-2">
                <slot />
            </div>
            <div class="w-[594px] h-[24px] flex justify-between">
                <p class="px-3">{{ value }}</p>
                <div class="flex items-center">
                    <img src="../assets/images/Vector(Stroke).svg" class="w-[13px] h-[7px]">
                </div>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
defineProps<{ label: string, value: any }>();
</script>