'use client';

import { useQueryDummyData } from './use-query-dummy-data';

export function DummyProducts() {
  const { data, isFetched } = useQueryDummyData(
    String(Math.floor(Math.random() * 100))
  );

  return (
    <div>
      {isFetched ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>..loading..</p>
      )}
    </div>
  );
}
