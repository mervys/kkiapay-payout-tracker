<script setup lang="ts">
import { useRouter } from "vue-router";
import DataTable from "../components/DataTable.vue";
</script>

<template>
  <div class=" h-full">
    <div class="py-5 ml-[900px] px-12">
      <div
        class="text-sm/[14px] bg-red-500 w-[250px] rounded h-8 text-white flex items-center justify-center"
      >
        + Nouveau Reversement
      </div>
    </div>

    <div class="py-12 flex-col items-center max-w-[645.75px] mx-auto">
      <div class="flex justify-center">

        <img src="/src/assets/images/Illustration.png" class="px-[10px]" />

        <div class="flex-col mr-[130px]">
          <p class="font-bold text-sm/[18px]">Bon retour, Nadège !</p>
          <br /><br />
          <div class="py-4 text-sm/[14px]">
            <p>
              Bienvenue sur Payout Tracker! voici votre page d'accueil, ou vous
              <br />
              pouvez rapidement voir vos reversements en attente et a venir
              et<br />
              accéder a vos comptes les plus importants
            </p>
          </div>
        </div>
      </div>

      <div class=" flex justify-center items-center gap-[500px] py-8 relative">
      <div class=" flex absolute mr-[750px]  ">
        <img src="/src/assets/images/Pending.png" class="p-1 h-8  text-sm/[14px]" />
        <div class="py-1">Opérations en attente</div>
      </div>

      <div class="text-blue-500 underline flex absolute ml-[300px] py-8 text-sm/[14px]">
        <a href="#">Toutes les opérations</a>
      </div>
    </div>
      <DataTable></DataTable>
      
    
    </div>
<!--div class=" flex justify-center items-center gap-[500px] py-6 relative">
      <div class="flex absolute mr-[950px]">
        <img src="/src/assets/images/Pending.png" class="p-1 h-8" />
        <div>Opérations en attente</div>
      </div>

      <div class="text-blue-500 underline flex absolute ml-[300px]">
        <a href="#">Toutes les opérations</a>
      </div>
    </!--div>

    <div class="bg-black">
      <div
        class="mr-[90px] py-4 w-[790px] border-t border-b h-16 flex jutify-center items-center"
      >
        <div class="mr-[90px] py-4 w-[668px] flex justify-between">
          <span class="font-bold">Statut</span>
          <span class="font-bold">Référence</span>
          <span class="font-bold">Compte Business</span>
          <span class="font-bold">Montant total(Fcfa)</span>
        </div>
      </div>
    </div>

    <div class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>6bvdfyeu</span></div>
            <div class="absolute ml-[135px]">
              <span>Casier judiciaire</span>
            </div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>un7caogghjtio</span></div>
            <div class="absolute ml-[135px]"><span>APIEx</span></div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>6bvdfyeu</span></div>
            <div class="absolute ml-[135px]">
              <span>Casier judiciaire</span>
            </div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>6bvdfyeu</span></div>
            <div class="absolute ml-[135px]">
              <span>Casier judiciaire</span>
            </div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>un7caogghjtio</span></div>
            <div class="absolute ml-[135px]"><span>APIEx</span></div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div>

    <div-- class="ml-[205px]">
      <div
        class="mr-[90px] py-4 w-[790px] border-b h-16 flex jutify-center items-center"
      >
        <div class="flex justify-between">
          <div class="mr-[90px] py-4 w-[715px] flex justify-between relative">
            <button
              class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
            >
              En attente
            </button>
            <div class="absolute ml-[305px]"><span>6bvdfyeu</span></div>
            <div class="absolute ml-[135px]">
              <span>Casier judiciaire</span>
            </div>
            <div class="absolute ml-[526px]"><span>14 800 000</span></div>
          </div>

          <div class="flex justify-center items-center">
            <img src="/src/assets/images/Row Cell.png" />
          </div>
        </div>
      </div>
    </div-->
  </div>
</template>
