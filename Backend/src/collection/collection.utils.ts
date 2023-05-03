import { CreateCollectionDto } from './collection.dto';

export const collectionSerializer = (data: any, filenames: string[]): CreateCollectionDto => {
  return {
    ...data,
    showOnHome: data.showOnHome === 'true',
    year: parseInt(data.year),
    files: filenames,
  };
};
