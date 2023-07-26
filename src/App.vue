

<template>
    <GuestLayout v-if="layout == 'guest'">
        <router-view/>
     </GuestLayout>

     <DashBoardLayout v-else :title = "route.meta.title">
        <router-view/>
     </DashBoardLayout>

</template>


<script setup lang="ts">
import { useRoute } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';
import { computed } from 'vue';
import DashBoardLayout from './layouts/DashBoardLayout.vue';

const route=useRoute()
const layout=computed(()=>route.meta.layout)

</script>
