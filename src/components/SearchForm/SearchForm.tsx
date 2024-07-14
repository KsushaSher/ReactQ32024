import React, { useState } from 'react';

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
    <form onSubmit={handleOnSubmit}>
      <input placeholder="Search" onChange={handleOnChange} value={search} />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
