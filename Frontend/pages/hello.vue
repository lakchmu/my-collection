<template>
  <div>{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      text: 'Init text',
    }
  },
  methods: {
    async fetchData() {
      this.text = await this.$axios.$get('');
    },
  },
  async mounted() {
    await this.fetchData()
  },
})
</script>
