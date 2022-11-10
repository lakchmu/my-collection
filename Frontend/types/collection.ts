export interface CollectionModel {
  name: string;
  year: number;
  brand: 'kinder' | 'other';
  type: 'simple' | 'difficult';
  status: 'inCollection' | 'inProgress' | 'inWishList' | 'none';
  showOnHome: boolean;
}
