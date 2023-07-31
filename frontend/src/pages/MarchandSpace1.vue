<template>
    <div class=" bg-slate-50 overflow-y-auto">
        <div class="w-[926px] h-[33px]"></div>
        <div class="flex justify-center">
            <div class="flex-col justify-center  w-[646px] h-[80px] gap-2">

                <p class="font-bold w-full h-[20px]"> Initier un nouveau reversement</p>
                <div class="py-2">
                    <p class=" w-full h-[36px] "> Rechercher un compte business en utilisant le nom du marchand associé ou
                        son <br>adresse mail !
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center ">
            <Search placeholder="OpenSI SAS"> </Search>
        </div>

        <div class="flex justify-center">
            <div class="w-[646px] h-[1px] border  py-66"></div>
        </div>

        <div class="flex justify-center py-3">
            <div class=" w-[647px] h-[491px] bg-slate-50">

                <div class="w-[300px] h-[27px] ">
                    <div class=" mt-4 "><b class="px-1 bold text-blue-800">04</b>Résultats trouvés pour : <a href="#"
                            class="  underline font-bold text-blue-800">Open SI SAS</a></div>
                </div>
                <div class="py-5">
                    <Bgwhitered> </Bgwhitered>
                </div>
                <div class="py-3">
                    <Bgwhitered> </Bgwhitered>
                </div>
                <div class="py-3">
                    <Bgwhitered> </Bgwhitered>
                </div>
                <div class="py-3">
                    <Bgwhitered> </Bgwhitered>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup  lang="ts">

import Search from "../components/Search.vue";
import Bgwhitered from "../components/Bgwhitered.vue"

</script>