<script setup lang="ts">
import { useRouter } from 'vue-router';


</script>

<template>
    
        
          <div class="bg-white w-[514px] h-96 rounded border-1">
            <div>
        <h1 class=" flex justify-center font-bold text-blue-900 mt-10">
            Consulter Vos mails
            </h1>
            </div>
            <div class="mt-2">
            <div class="">
                <P class="flex justify-center text-center">
              Nous avons envoyé un lien de vérification à votre adresse mail :
              
            </P>
            </div>
            <a href="jean@yopmail.com" class="text-blue-950 flex justify-center ">jean@yopmail.com
          
        </a></div>
        <P class="mt-6 ml-10">Code de vérification</P>
        <form >
        <div class="flex justify-center py-4 gap-8">

            <input type="text" class="  rounded border-2 w-[52px] h-[52px]">
            <input type="text" class="  rounded border-2 w-[52px] h-[52px]">
            <input type="text" class="  rounded border-2 w-[52px] h-[52px]">
            <input type="text" class="  rounded border-2 w-[52px] h-[52px]">
            <input type="text" class="  rounded border-2 w-[52px] h-[52px]">
            
        
          
          </div>
            <p class="flex justify-center py-4">
            Vous n’avez pas reçu le code ? 
            <a href="Renvoyer le code" class="text-blue-600 flex justify-center">Renvoyer le code
          
        </a>
          </p>
          
          <div  class="py-3 flex justify-center">
        <button  type="submit" class="h-10 w-[415px] bg-red-500 flex items-center justify-center rounded">
            <p class=" text-white">
                Se Connecter
            </p>
        </button>
        </div>
        </form>
        </div>
          
        
      
</template>