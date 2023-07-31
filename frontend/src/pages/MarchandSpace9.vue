<template>
    <div class=" bg-slate-50 overflow-y-auto ">
        <div class="flex justify-center">
            <div class="w-[646px] h-[197px]">
                <div class="flex justify-center">
                    <div class="flex-col ">

                        <p class="font-bold  w-[263px]h-[20px] ">Informations du bénéficiaire</p>
                        <div class="mt-2">
                            <Bgwhitered> </Bgwhitered>
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
                    <Minput label= "Montant a reverser(Fcfa)" value="2021000"> </Minput>
                </div>

                <div class="flex">
                    <div class="mr mt-6">

                        <div class="font-bold w-[300px] h-[30px] "> Adresse de reversement</div>
                    </div>
                </div>

                <MRadio Compte = "Compte bancaire" Ecobank = "Ecobank" Open = "Open SI2345673653"
                Bancaire = "Numéro de l'abonné Mobile" Mobile = "Compte Mobile Money"></MRadio>


                <Mbutton1></Mbutton1>
            </div>
        </div>




    </div>
</template>
<script setup lang="ts">
import Bgwhitered from "../components/Bgwhitered.vue";
import Msolde from "../components/Msolde.vue";
import Minput from "../components/Minput.vue";
import MRadio from "../components/MRadio.vue";
import Mbutton1 from "../components/Mbutton1.vue"
</script>