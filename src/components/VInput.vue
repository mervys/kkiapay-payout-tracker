<template>
  <template v-if="type == 'password'">
    <label class="block relative">
      <span class="block text-sm py-3">{{ label }}</span>
      <input
        :type="customType"
        class="rounded border-2 border-indigo-500/50 w-[402px] h-10 px-6"
      />

      <div
        class="absolute right-16 top-12 inset-y-0 flex items-center mr-2"
        @click="onClick"
      >
        <img src="/src/assets/images/Vector.png" alt="" />
      </div>
    </label>
  </template>
  <template v-else>
    <label class="block relative">
      <span class="block text-sm py-3">{{ label }}</span>
      <input
        :type="type"
        class="rounded border-2 border-indigo-500/50 w-[402px] h-10 px-6"
      />
    </label>
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
