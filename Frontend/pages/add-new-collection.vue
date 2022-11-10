<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h5 pb-8">Create new Collection</h1>
          <v-text-field
            variant="solo"
            v-model="fields.name"
            :counter="10"
            :rules="[(v) => !!v || 'Name is required']"
            label="Name"
            required
          />

          <v-text-field
            variant="solo"
            v-model="fields.year"
            :rules="[(v) => !!v || 'Year is required']"
            label="Year"
            required
          />

          <v-select
            variant="solo"
            v-model="fields.type"
            :items="types"
            :rules="[(v) => !!v || 'Type is required']"
            label="Type"
            required
          />

          <v-select
            variant="solo"
            v-model="fields.brand"
            :items="brands"
            :rules="[(v) => !!v || 'Brand is required']"
            label="Brand"
            required
          />

          <v-select
            variant="solo"
            v-model="fields.status"
            :items="statuses"
            :rules="[(v) => !!v || 'Status is required']"
            label="Status"
            required
          />

          <v-checkbox v-model="fields.showOnHome" label="Show on Home Page?" />

          <v-btn color="primary" class="mr-4" @click="onSubmit">
            Validate
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { CollectionModel } from '@/types';

const brands = ['kinder', 'other'];
const types = ['simple', 'difficult'];
const statuses = ['inCollection', 'inProgress', 'inWishList'];

const form = ref(null);
const valid = ref<boolean>(false);
const fields = ref<CollectionModel>({} as CollectionModel);

const onSubmit = () => {
  if (!form.value.validate()) return;

  console.log(fields);
};
</script>

<style scoped></style>
