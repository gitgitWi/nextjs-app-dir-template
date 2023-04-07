import { useQuery } from '@tanstack/react-query';

export const useQueryDummyData = (productId?: string) => {
  return useQuery({
    queryKey: [`query-dummy-data`],
    queryFn: () => fetchDummyProducts(productId),
  });
};

const fetchDummyProducts = async (productId?: string) => {
  return fetch(
    `https://dummyjson.com/products${productId ? `/${productId}` : ''}`
  ).then((res) => res.json());
};
