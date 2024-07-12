import { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';
import { LS_SEARCH_UNIQ_KEY } from './constants';
import { useLocalStorageState } from './useLocalStorage';

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
}

function App() {
  const [items, setItems] = useState([]);
  const [searchLS, setSearchLS] = useLocalStorageState(LS_SEARCH_UNIQ_KEY);

  const handleSubmit = useCallback(
    (search: string) => {
      setSearchLS(search);
      fetch(`https://swapi.dev/api/planets?search=${search}`)
        .then(res => res.json())
        .then(res => setItems(res.results));
    },
    [setSearchLS],
  );

  useEffect(() => {
    handleSubmit(searchLS);
  }, [searchLS, handleSubmit]);

  return (
    <ErrorBoundary>
      <main>
        <header>
          <div className="header_content">
            <SearchForm onSubmit={handleSubmit} initialSearch={searchLS} />
            <ButtonError />
          </div>
        </header>
        <section>
          <SearchResults items={items} />
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default App;
