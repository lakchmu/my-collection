export interface CollectionModel {
  name: string;
  year: number;
  brand: Brand;
  type: Type;
  status: Status;
  showOnHome: boolean;
  files?: File[];
}

export enum Brand {
  KINDER = 'KINDER',
  OTHER = 'OTHER',
}

export enum Type {
  SIMPLE = 'SIMPLE',
  DIFFICULT = 'DIFFICULT',
}

export enum Status {
  IN_COLLECTION = 'IN_COLLECTION',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_WISH_LIST = 'IN_WISH_LIST',
  EMPTY = 'EMPTY',
}