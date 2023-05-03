import { Product } from '@prisma/client';

import {
  CreateProductDto,
  EditProductDto,
  PayloadProductDto,
} from './product.dto';

export const productSerializer = (
  data: any,
  filenames: string[],
): CreateProductDto => {
  const files = filenames.length ? { files: filenames } : {};

  return {
    ...data,
    ...files,
    amount: data.amount && parseInt(data.amount),
    limit: parseInt(data.limit),
  };
};

export const editProductSerializer = (
  data: EditProductDto,
  filenames: string[],
): EditProductDto => {
  const files = filenames.length ? { files: filenames } : {};

  return {
    ...data,
    ...files,
  };
};

export const payloadSerializer = (
  data: PayloadProductDto,
): EditProductDto => {
  const name = data.name ? { name: data.name } : {};
  const unit = data.unit ? { unit: data.unit } : {};
  const amount = data.amount !== undefined ? { amount: parseInt(data.amount) } : {};
  const limit = data.limit !== undefined ? { limit: parseInt(data.limit) } : {};

  return {
    id: parseInt(data.id),
    ...name,
    ...unit,
    ...amount,
    ...limit,
  };
};

export const productFormater = (product: Product) => ({
  id: product.id,
  name: product.name,
  unit: product.unit,
  amount: product.amount,
  limit: product.limit,
  uri: product.files[0],
});
