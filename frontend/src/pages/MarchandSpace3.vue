<template>
    <div class=" bg-slate-50 overflow-y-auto ">
        <div class="flex justify-center">
            <div class="w-[646px] h-[197px]">
                <div class="flex justify-center">
                    <div class="flex-col ">

                        <p class="font-bold  w-[263px]h-[20px] ">Informations du bénéficiaire</p>
                        <div class="mt-2">
                            <BusinessAccountListtem ifu="23 WE 895R090R"  enterprise ="Open SI SAS " owner="KOUNOU Giles" email="Opensico@gmail.com"> </BusinessAccountListtem>
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
                    <Minputs label="Mode de reversement " value="Compte bancaire"> </Minputs>
                </div>


                <div class="mr-[446px] mt-6">
                    <div class=" flex justify-center">
                        <div class="font-bold w-[300px] h-[30px]"> Informations de la banque</div>
                    </div>
                </div>


                <div class="mt-3">
                    <Minputimg label="Localsation de la banque" value="Bénin" >
                        
                        <img src="../assets/images/FlagBenin.png">
                
                    </Minputimg>
                </div>
                <div class="mt-3">
                    <Minput label="Nom de la banque" value="2021000"> </Minput>
                </div>
                <div class="mt-3">
                    <Minput label=" Code swift de la banque " value="2021000"> </Minput>
                </div>





                <Mbutton @back="onBack" @next="onSubmit"></Mbutton>
            </div>
        </div>


    </div>
</template>
<script setup lang="ts">
import BusinessAccountListtem from "../components/BusinessAccountListtem.vue";
import Minput from "../components/Minput.vue";
import Minputimg from "../components/Minputimg.vue";
import Minputs from "../components/Minputs.vue";
import Mbutton from "../components/Mbutton.vue";
import Msolde from "../components/Msolde.vue";

import { useRouter } from "vue-router";

const router = useRouter();
function onBack() {
    router.back();

}
function onSubmit() {
  router.push({ path: "marchand-space4" });
  
}

</script>