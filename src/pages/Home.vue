<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
<div>
  <div class="bg-white w-[510px] h-80">
        <h1 class="text-blue-950 flex justify-center font-bold py-3">
          Me connecter
        </h1>

        <form>
          <div>
          <label class="block px-10 w-96 h-96">
            <span class="block text-sm py-3">Adresse Mail</span>
            <input
              type="Adresse Mail"
              class="rounded border-2 border-indigo-500/50 w-[402px] h-10"
            />
            <span class="block text-sm py-3">Mot de passe</span>
            <div class="relative w-[402px] h-10">
              <input
                type="Mot de passe "
                class="rounded border-2 border-indigo-500/50 h-10 w-full"
              />
              <div class="absolute right-0 inset-y-0 flex items-center mr-2">
                <img
                  src="/src/assets/images/Vector.png"
                  
                  alt=""/>
              </div>
            </div>

            <span class="block py-3"></span>
            <div class="rounded border-2 bg-red-500 h-10 w-[402px] flex justify-center">
          
            <div class=" flex justify-center items-center text-white py-3">
          Se Connecter
        </div>
            </div>
          </label>
        </div>
        </form>
      </div>
      <a href="Mot de passe oublié ?" class="text-blue-600 flex justify-center underline hover:underline-offset-4">
      Mot de passe oublié ?
    </a>
</div>
     

</template>

<style></style>
