<template>
    <div class=" shadow-md bg-red-500  h-[90px] rounded ml-[4px]  flex items-center ">
        <div class="w-[646px] h-[91px]  ml-[4px] rounded-tr rounded-br bg-white flex items-center ">
            <div class="p-4 flex">
                <div class="  w-[585px] h-[50px] ">
                    <div class="  w-[485px] h-[50px] ">

                        <span><b>{{ enterprise }}| {{ owner }}</b><br>
                            {{ ifu }} | {{ email }}</span>
                    </div>

                </div>
                <div class="py-4">
                    <div class="w-[9px] h-[15px] ">
                        <img src="../assets/images/bluevector.png" class="pointer:fixed">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ enterprise: String, ifu: String, email: String, owner: String }>();
</script>


