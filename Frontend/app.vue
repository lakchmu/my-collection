<template>
  <v-app>
    <PageLayout v-if="!isLoginPage">
      <NuxtPage />
    </PageLayout>
    <NuxtPage v-else />
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import { PageLayout } from '@/components';

const route = useRoute();
const isLoginPage = ref<boolean>(route.path === '/login');

watch(route, () => {
  isLoginPage.value = route.path === '/login';
});
</script>
