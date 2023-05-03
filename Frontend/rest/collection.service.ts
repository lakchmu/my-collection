import { CollectionModel } from '@/types';

import BaseService from './base.service';

class CollectionService extends BaseService {
  create(payload: FormData) {
    return this.post('/api/collection', payload);
  }
}

const collectionService: CollectionService = new CollectionService();

export default collectionService;
