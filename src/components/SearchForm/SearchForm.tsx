import React, { useState } from 'react';
import { getTestAttrs } from '../../../tests/getTestAttrs';

interface IProps {
  onSubmit: (search: string) => void;
  initialSearch: string;
}

function SearchForm({ onSubmit, initialSearch }: IProps) {
  const [search, setSearch] = useState(initialSearch);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form {...getTestAttrs({ id: 'search-form' })} onSubmit={handleOnSubmit}>
      <input
        placeholder="Search"
        {...getTestAttrs({ id: 'search-form-input' })}
        onChange={handleOnChange}
        value={search}
      />
      <button {...getTestAttrs({ id: 'search-form-button' })}>Search</button>
    </form>
  );
}

export default SearchForm;
