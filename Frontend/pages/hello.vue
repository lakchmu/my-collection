<template>
  <v-theme-provider with-background class="pa-10">
    <v-card class="card" width="250">
      <v-card-text>{{ text }}</v-card-text>
    </v-card>
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import tokenService from '@/utils/token-service';

definePageMeta({
  middleware: 'auth',
});

let text = ref<any>('Init text');

const { data } = await useFetch('/api/test', {
  method: 'get',
  headers: {
    Authorization: `bearer ${tokenService.getUserToken()}`,
  },
});

if (data) {
  text = data;
}
</script>

<style lang="scss">
.card {
  width: 250;
  padding: 16px;
}
</style>
