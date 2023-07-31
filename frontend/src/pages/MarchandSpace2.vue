<template>
    <div class=" bg-slate-50 overflow-y-auto ">
        <div class="flex justify-center">
            <div class="w-[646px]">
                <div class="flex justify-center">
                    <div class="flex-col ">

                        <p class="font-bold  w-[263px]h-[20px] ">Informations du bénéficiaire</p>
                        <div class="mt-2">
                            <BusinessAccountListtem ifu="IFU N° 23WE 32323" enterprise="Open SI SAS"
                                email="opensico@yopmail.com" owner="Kounou Giles"> </BusinessAccountListtem>

                        </div>
                    </div>
                </div>

                <Msolde></Msolde>
            </div>
        </div>



        <div class="flex justify-center py-2">

            <div class="w-[646px] h-[1px] border "></div>

        </div>

        <div class="flex justify-center">

            <div class="w-[646px] h-[473px]  bg-slate-50 flex-col ">
                <div class="mt-7">
                    <Minput label="Montant a reverser" value=2021000> </Minput>
                </div>
                <div class=" mt-3">
                    <Minput label="Mode de reversement " value="Compte bancaire"> </Minput>
                </div>

                <div class=" w-[646px] h-[67px] mt-3">
                    <div class="py-6 ml-[465px]">
                        <button
                            class=" w-[180px] h-[42px] space-x-3 bg-slate-50  border-blue-900 rounded  border-2 flex justify-center items-center">

                            <img src="../assets/images/chevron-back.png">

                            <span class="text-blue-850" @click="onBack" >Retour</span>
                        </button>
                    </div>



                </div>

            </div>




        </div>


    </div>
</template>
<script setup lang="ts">
import BusinessAccountListtem from "../components/BusinessAccountListtem.vue";
import Minput from "../components/Minput.vue";
import Msolde from "../components/Msolde.vue";
import { useRouter } from "vue-router";





const router = useRouter();

function onBack() {
    router.back();

}
</script>