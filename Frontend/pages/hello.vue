<template>
  <div>{{ text }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let text = ref<any>('Init text');

const { data } = await useFetch('/api/test');

if(data) {
  text = data
}
</script>
