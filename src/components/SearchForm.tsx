import React, { useEffect, useState } from 'react';

interface IProps {
  onSubmit: (search: string) => void;
}
const LS_SEARCH_UNIQ_KEY = 'KSU_APP_SEARCH';
const SEARCH_FROM_LS = localStorage.getItem(LS_SEARCH_UNIQ_KEY) || '';

function SearchForm({ onSubmit }: IProps) {
  const [search, setSearch] = useState(SEARCH_FROM_LS);

  useEffect(() => {
    onSubmit(SEARCH_FROM_LS);
  }, [onSubmit]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
    localStorage.setItem(LS_SEARCH_UNIQ_KEY, search);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input placeholder="Search" onChange={handleOnChange} value={search} />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
