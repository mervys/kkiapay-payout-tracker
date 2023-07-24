<template>
  <table class="bg-white table-auto table-fixed border-spacing-8 border w-full ">
    
    <tr class="h-12 border-2 border-slate-50 rounded text-left text-[14px] ">
      <th class="px-4">Statut</th>
      <th>Référence</th>
      <th>Compte Business</th>
      <th>Montant total (FCFA)</th>
      <th></th>
    </tr>
    <template v-for="item in items">
      <tr @click="onclick(item)" class="border-2 border-slate-50 text-[14px] ">
        <td class="">
          <button
            class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-full px-3 p-1"
          >
            {{ item.status }}
          </button>
        </td>
        <td>{{ item.reference }}</td>
        <td>{{ item.businessaccount }}</td>
        <td>{{ item.totalamount }}</td>
        <td class="flex justify-center items-center">
          <img src="/src/assets/images/Row Cell.png" />
        </td>
      </tr>
    </template>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useReversementStore } from "../store/reversement";

const props = defineProps(["items"]);
console.log(props.items);


const router = useRouter();
const store = useReversementStore();

function onclick(item) {
   store.define(item)
  router.push({ name: "operation-reversements", });
  console.log("Data-table");
}

</script>
