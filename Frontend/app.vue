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
import tokenService from '@/utils/token-service';

const route = useRoute();
const isLoginPage = ref<boolean>(!tokenService.isUserAuthenticated());

watch(route, () => {
  isLoginPage.value = !tokenService.isUserAuthenticated();
});
</script>
