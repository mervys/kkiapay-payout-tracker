<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="flex-col justify-center gap-2">

                <p class="font-bold w-[646px] h-[20px]"> Initier un nouveau reversement</p>
                <div class="py-2">
                    <p class=" w-full"> Rechercher un compte business en utilisant le nom du marchand associé ou
                        son <br>adresse mail !
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center ">
            <Search placeholder="OpenSI SAS" @click="onSubmit"> </Search>
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

                <ul>
                    <li v-for="payout in store.payouts" class="py-5">
                        <BusinessAccountListtem @click="onSubmit" :ifu="payout.companyIfu" :enterprise="payout.companyName"
                            :email="payout.companyName" :owner="payout.companyOwnerName"> </BusinessAccountListtem>

                    </li>
                </ul>



            </div>

        </div>

    </div>
</template>

<script setup  lang="ts">

import Search from "../components/Search.vue";
import BusinessAccountListtem from "../components/BusinessAccountListtem.vue";
import { useRouter } from "vue-router";
import { usePayoutStore } from "../store/payouts.ts";



const router = useRouter();
const store = usePayoutStore();


function onSubmit() {
    router.push({ path: "marchand-space2" });
}

</script>