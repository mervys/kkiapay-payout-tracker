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
                    <Minput label="Montant a reverser(Fcfa)" value= 2021000> </Minput>
                </div>
                <div class=" mt-3">
                    <Minputs label="Mode de reversement " value="Compte Mobile Money"> </Minputs>
                </div>


                <div class="mr-[446px] mt-6">
                    
                        <div class="font-bold w-[300px] h-[30px]"> Informations de l'opérateur</div>
                    
                </div>


                <div class="mt-3">
                    <Minputimg label="localisation du GSM" value="Bénin">
                        <img src="../assets/images/FlagBenin.png">
                    </Minputimg>
                </div>
                <div class="mt-3">
                    <Minputs label="Opérateur de téléphone mobile" value="MTN Bénin"> </Minputs>
                </div>





                <Mbutton></Mbutton>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import Bgwhitered from "../components/Bgwhitered.vue";
import Minput from "../components/Minput.vue";
import Minputs from "../components/Minputs.vue";
import Minputimg from "../components/Minputimg.vue";
import Mbutton from "../components/Mbutton.vue";
import Msolde from "../components/Msolde.vue"


</script>