<template>
    <div class="w-[646px] h-[68px]  ">

        <div class="mt-2 ">{{ label }}</div>
        <div class=" w-[646px] flex  bg-slate-50 rounded h-[42px] border-2 border-blue-100 flex items-center">
            <div class="w-[24px] h-[24px] ml-2">
                <slot />
            </div>
            <div class="w-[562px] h-[18px]  ">
                <p class="px-3">{{ value }}</p>

            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
    defineProps < { label: string, value: any } > ();
</script>