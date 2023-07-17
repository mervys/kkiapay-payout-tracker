<template>
  <template v-if="type == 'password'">
    <div class="flex justify-center">
    <label class="block relative">
      <span class="block text-sm py-1">{{ label }}</span>
      <input
        :type="customType"
        class="rounded border-2 border-indigo-500/50 py-2 px-28 px-6 w-full flex justify-center items-center"
      />

      <div
        class="absolute right-4 top-8 inset-y-0 flex items-center mr-1"
        @click="onClick"
      >
        <img src="/src/assets/images/Vector.png" alt="" />
      </div>
    </label></div>
  </template>
  <template v-else>
    <div class="flex justify-center">
    <label class="block relative ">
      
      <span class="block text-sm py-1 ">{{ label }}</span>
      <input
        :type="type"
        class="rounded border-2 border-indigo-500/50 px-28 py-2 flex "
      />
    </label></div>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ type: string; label: string }>();
const customType = ref(props.type);
function onClick() {
  if (customType.value == "text") {
    customType.value = "password";
  } else {
    customType.value = "text";
  }
}
</script>



