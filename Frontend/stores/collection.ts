import { defineStore } from 'pinia';

import { collectionService } from '@/rest';

import type { CollectionModel } from '@/types';

export const useCollectionStore = defineStore('collection', {
  state: () => {
    return { list: [], errorMessage: null };
  },

  actions: {
    async create(fields: CollectionModel) {
      try {
        await collectionService.create(fields);

        this.errorMessage = null;
      } catch (error) {
        this.errorMessage = 'Data is incorrect. Try again';
      }
    },
  },
});
