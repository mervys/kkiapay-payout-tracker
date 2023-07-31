<script setup lang="ts"></script>

<template>
  <div class="">
    <div class="mt-16 flex justify-center items-center">
      <img
        src="../assets/images/Vector(1).svg"
        class="w-[120px] mt-5 h-[120px]"
      />
    </div>
    <p class="font-bold text-center mt-3">
      Opération de reversement intiée <br />
      avec succès !
    </p>
    <p class="text-[16px] mt-5 text-center">
      L’opération de reversement liée au compte business
      <b class="bg-gray-200">Open SI SAS</b> a été initiée avec succès.
    </p>
    <div class="bg-slate-50 border-2 mt-8">
      <div class="">
        <p>Référence</p>
        <p>132EEWRW4</p>
      </div>
      <div class="flex justify-center items-center">
        <div class="h-[48px] w-1 bg-slate-50"></div>
      </div>
      <div class="">
        <p>Statut</p>
        <button
          class="border-yellow-500 bg-yellow-100 border-2 border-b text-yellow-500 rounded-xl px-3"
        >
          En attente
        </button>
      </div>
    </div>
    <div class="flex justify-center space-x-4 mt-12">
      <div
        class="rounded border-2 border-red-500 w-52 h-10 py-2 w-full flex justify-center"
      >
        <button
          type="submit"
          class="flex justify-center items-center text-white"
        >
          <p class="text-red-500">Marquer comme un succès</p>
        </button>
      </div>

      <div
        class="rounded border-1 bg-red-500 py-2 w-52 h-10 flex justify-center"
      >
        <button type="submit" class="flex items-center text-white">
          <img src="/src/assets/images/download.png" class="px-2" />
          <p>Confirmer Plus Tard</p>
        </button>
      </div>
    </div>
  </div>
</template>
