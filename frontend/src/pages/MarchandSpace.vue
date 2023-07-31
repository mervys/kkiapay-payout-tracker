
<template>
    <div class=" bg-slate-50 overflow-y-auto">
        <div class="w-[926px] h-[33px]"></div>
        <div class="flex justify-center">
            <div class="flex-col justify-center  w-[646px] h-[80px] gap-2">

                <p class="font-bold w-full h-[20px]"> Ajouter un reversement</p>
                <div class="py-2">
                    <p class=" w-full h-[36px] "> Rechercher un compte business en utilisant le nom du marchand associé ou
                        son
                        <br>adresse mail !
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <Search placeholder="Nom du compte Business, du marchand ou mail"> </Search>
        </div>

    </div>
</template>
<script setup  lang="ts">
 
 import Search  from "../components/Search.vue";
 
 </script>