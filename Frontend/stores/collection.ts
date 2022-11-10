import { defineStore } from 'pinia';

import { collectionService } from '@/rest';

import type { CollectionModel } from '@/types';

export const useCollectionStore = defineStore('collection', {
  state: () => {
    return { list: [] };
  },

  actions: {
    async create(fields: CollectionModel) {
      try {
        const res = await collectionService.create(fields);

        console.log(res);
      } catch (error) {
        this.errorMessage = 'Data is incorrect. Try again';
      }
    },
  },
});
