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

                <div class="flex">
                    <div class="mr mt-6">

                        <div class="font-bold w-[300px] h-[30px] "> Informations du compte Mobile Money</div>
                    </div>
                </div>


                <div class="mt-3">
                    <Minput label="intitulé du compte" value=2021000> </Minput>
                </div>
                <div class="mt-3">
                    <Minputimg label=" Numéro de téléphone lié au compte" value="Bénin">
                        <img src="../assets/images/Flag-Benin.png">
                    </Minputimg>
                </div>

                <div class="mt-3">
                    <Minputimgs label="Relevé d'identité bancaire  " value="RIB.pdf">
                        <img src="../assets/images/document-attach.png">
                    </Minputimgs>
                </div>
                <div class="py-4">
                    <Mremember label="Se souvenir de compte Mobile Money"></Mremember>
                </div>

                <Mbutton @back="onBack " @next="onNext"></Mbutton>
            </div>
        </div>




    </div>
</template>
<script setup lang="ts">
import BusinessAccountListtem from "../components/BusinessAccountListtem.vue";
import Minput from "../components/Minput.vue";
import Minputimg from "../components/Minputimg.vue";
import Minputimgs from "../components/Minputimgs.vue";
import Mbutton from "../components/Mbutton.vue";
import Msolde from "../components/Msolde.vue";
import Mremember from "../components/Mremember.vue";
import { useRouter } from "vue-router";

const router = useRouter();
function onBack() {
    router.back();

}
function onNext() {
  router.push({ path: "marchand-space9" });
  
}


</script>