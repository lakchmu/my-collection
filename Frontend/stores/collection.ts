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
        const formData = new FormData();

        Object.keys(fields).forEach((key: string) => {
          key === 'files'
            ? fields[key].forEach((file) => formData.append(key, file))
            : formData.append(key, fields[key]);
        });

        await collectionService.create(formData);

        this.errorMessage = null;
      } catch (error) {
        this.errorMessage = 'Data is incorrect. Try again';
      }
    },
  },
});
