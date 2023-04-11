import { useQuery } from '@tanstack/react-query';
import { queryKeyStore } from '@features/providers/react-query';

export const useQueryDummyData = (productId = '') => {
  return useQuery({
    queryKey: queryKeyStore.dummy.products(productId).queryKey,
    queryFn: () => fetchDummyProducts(productId),
  });
};

const fetchDummyProducts = async (productId?: string) => {
  return fetch(
    `https://dummyjson.com/products${productId ? `/${productId}` : ''}`
  ).then((res) => res.json());
};
