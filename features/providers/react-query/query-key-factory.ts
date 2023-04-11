import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeyStore = createQueryKeyStore({
  dummy: {
    products: (productId: string) => [productId],
  },
});
