<template>
    <div class=" bg-slate-50 overflow-y-auto">
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

                        <div class="font-bold w-[300px] h-[30px] "> Informations du compte bancaire</div>
                    </div>
                </div>


                <div class="mt-3">
                    <Minput label="intitulé du compte" value=2021000> </Minput>
                </div>
                <div class="mt-3">
                    <Minput label=" Numéro de compte" value=2021000> </Minput>
                </div>

                <div class="mt-3">
                    <Minputimgs label="Relevé d'identité bancaire  " value="RIB.pdf">

                        <img src="../assets/images/document-attach.png">
                    </Minputimgs>
                </div>
                <div class="py-4">
                    <Mremember label="Se souvenir de ce compte bancaire"></Mremember>
                </div>

                <Mbutton @back="onBack" @next="onNext"></Mbutton>
            </div>
        </div>





        <transition name="fade">

            <Dialog :open="isOpen" class="relative z-50">
                <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div class="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel class="w-full max-w-sm rounded bg-white">
                        <div v-if="isOpen">
                            <div class="h-full w-full">
                                <div class="flex justify-center ">
                                    <div class="w-[486px] h-[482px] bg-white ">
                                        <div class="w-[489px] h-[64px] flex">

                                            <div class="py-5 flex ml-5">
                                                <div class="w-[419px] h-[22px] font-bold  ">Initier un reversement</div>
                                                <img @click="onClose" src="../assets/images/Dialog/Header Type/-Icon.png"
                                                    class="w-[24px] h-[24px]">
                                            </div>
                                        </div>
                                        <div class="flex justify-center">
                                            <div class="w-[96px] h-[96px]   flex justify-center items-center">
                                                <img src="../assets/images/Group.svg" class="w-[78px] h-[66px] ">
                                            </div>
                                        </div>
                                        <div class="w-[484px] h-[256px] ">
                                            <div class="w-[485px] h-[136px] flex justify-between flex-col">
                                                <div class="w-[485px] h-[48px]">
                                                    <div class="flex justify-center">
                                                        <div class="w-[448px] h-[48px]">Souhaitez-vraiment un reversement
                                                            pour le
                                                            compte business <br><b class="p-1">Open SI SAS ?</b></div>
                                                    </div>

                                                </div>
                                                <div class="w-[485px] h-[70px] flex justify-center">
                                                    <div
                                                        class="w-[440px] h-[70px] border-2 border-blue-600 border-blue-200 rounded bg-blue-100 flex justify-center items-center  ">

                                                        <div class="w-[186px] h-[38px]  "> <b>Montant a reverser</b><br>
                                                            2021000
                                                            Fcfa
                                                        </div>
                                                        <div class="px-2">
                                                            <div class="h-[38px] w-[1px] border-2  "></div>
                                                        </div>
                                                        <div class="w-[201px] h-[38px] flex justify-center ">
                                                            <p><b>Compte bancaire</b><br>OPENSI (00234324234423)</p>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            <div class="flex justify-center">
                                                <div class="py-5">
                                                    <div class="w-[438px] h-[74px]  flex justify-between flex-col ">
                                                        <div class="w-[438px] h-[24px] ">Saisissez INITIATE pour confirmer
                                                        </div>
                                                        <input type="text"
                                                            class="w-[438px] h-[42px] border border-blue-100">
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="flex justify-center">
                                            <div class=" w-[441px] h-[42px] flex justify-between">

                                                <button @click="onClose"
                                                    class="w-[210px] h-[42px] border-blue-950 border-2 rounded flex justify-center items-center border-blue-900 bg-white">
                                                    <span class="text-blue-950 font-bold">Anuuler</span>
                                                </button>

                                                <button @click="onSubmit"
                                                    class=" w-[211px] h-[42px] rounded bg-blue-800   space-x-2 text-white flex justify-center items-center font-bold ">
                                                    <img src="../assets/images/checkmark-done.svg"
                                                        class="w-[16px] h-[16px]">
                                                    <span>Valider</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </transition>
    </div>
</template>
<style></style>
<script setup lang="ts">
import BusinessAccountListtem from "../components/BusinessAccountListtem.vue";
import Minput from "../components/Minput.vue";
import Minputimgs from "../components/Minputimgs.vue";
import Mbutton from "../components/Mbutton.vue";
import Msolde from "../components/Msolde.vue";
import Mremember from "../components/Mremember.vue";

import { ref } from 'vue';





const isOpen = ref(false);



function onNext() {
    isOpen.value = true;
}

function onClose() {
    isOpen.value = false;
}

function onSubmit() {
    if (isOpen.value = true) {
        router.push({ path: "SuccessReversement" });
    }

}

import { useRouter } from "vue-router";

const router = useRouter();
function onBack() {
    router.back();

}
</script>