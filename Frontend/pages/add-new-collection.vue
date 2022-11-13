<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h5 pb-8">Create new Collection</h1>
          <v-text-field
            variant="solo"
            v-model="fields.name"
            :rules="[(v) => !!v || 'Name is required']"
            label="Name"
            required
          />

          <v-select
            variant="solo"
            v-model="fields.year"
            :items="years"
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
            label="Brand"
          />

          <v-select
            variant="solo"
            v-model="fields.status"
            :items="statuses"
            label="Status"
          />

          <v-file-input
            v-model="fields.files"
            variant="solo"
            label="File input"
            prepend-icon="mdi-camera"
            multiple
          />

          <v-checkbox v-model="fields.showOnHome" label="Show on Home Page?" />

          <v-btn color="primary" class="mr-4" @click="onSubmit"> Create </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { range } from 'lodash';

import { useCollectionStore } from '@/stores';
import { Brand, Type, Status } from '@/types';

import type { CollectionModel } from '@/types';

definePageMeta({ middleware: 'auth' });

const collectionStore = useCollectionStore();

const brands = Object.values(Brand);
const types = Object.values(Type);
const statuses = Object.values(Status);
const years = range(new Date().getFullYear(), 1950, 1);

const form = ref(null);
const valid = ref<boolean>(false);
const fieldsInitValue = {
  showOnHome: false,
  brand: Brand.KINDER,
  status: Status.EMPTY,
} as CollectionModel;
const fields = ref<CollectionModel>(fieldsInitValue);

const onSubmit = async () => {
  if (!form.value.validate()) return;

  await collectionStore.create(fields.value);

  if (!collectionStore.errorMessage) {
    form.value.reset();
  }
};

</script>

<style scoped />
