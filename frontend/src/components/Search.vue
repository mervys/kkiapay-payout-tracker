 

<template>
    <div class="py-3 ">
        <div class="w-[646px] h-[55px]  flex justify-between  rounded bg-white border relative ">

             
            <input class="w-[450px]  h-[53pxx] bg-white px-10 rounded " :placeholder = "placeholder">
              
            <img src="../assets/images/loupe.svg" class="absolute px-3 py-4">


            <span class="flex items-center">
                <button class="bg-blue-800  flex justify-center  rounded items-center w-[176px] h-[42px] mr-[4px]">
                    <p class="text-white">Rechercher</p>
                </button>
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
 defineProps<{  placeholder: string }>();

</script>
