<template>
    <div class="w-[300px] h-[144px] flex justify-between flex-col">
        <div class=" w-[300px] h-[85px]  flex space-x-2 ">
            <input type="radio" class="w-[40px] h-[20px] ">
            <div class="w-[500px] h-[85px]  flex-col flex justify-between">
                
                <p>{{ Compte }}</p>
                <p ><b>{{ Ecobank }}</b><br>{{ Open }}</p>

            </div>

        </div>
        <div class="w-[299px]  h-[20px] flex space-x-2">
            <input type="radio" class="w-[20px] h-[20px]">
            <div>{{ Bancaire }}</div>

        </div>
        <div class="w-[299px] h-[20px] flex space-x-2">
            <input type="radio" class="w-[20px] h-[20px]">
            <div> {{ Mobile }}</div>

        </div>

    </div>
</template>
<script setup lang="ts">
defineProps<{ Compte: String, Ecobank: String, Open: String,
    Bancaire: String, Mobile: String
}>();
</script>