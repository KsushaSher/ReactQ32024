import { useCallback, useMemo } from 'react';

export const useLocalStorageState = (
  key: string,
): [string, (value: string) => void] => {
  const searchLS = useMemo(() => localStorage.getItem(key) || '', [key]);

  const handleSetValue = useCallback(
    (value: string) => localStorage.setItem(key, value),
    [key],
  );

  return [searchLS, handleSetValue];
};
