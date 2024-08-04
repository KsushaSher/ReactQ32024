import { useCallback, useState } from 'react';

export const useLocalStorageState = (
  key: string,
): [string, (value: string) => void] => {
  const [search, setSearch] = useState(/* localStorage.getItem(key)  ||*/ '');

  const handleSetValue = useCallback(
    (value: string) => {
      // localStorage.setItem(key, value);
      setSearch(value);
    },
    [key],
  );

  return [search, handleSetValue];
};
