import { useCallback, useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';
import { ITEMS_PER_PAGE, LS_SEARCH_UNIQ_KEY } from './constants';
import { useLocalStorageState } from './useLocalStorage';
import Pagination from './components/Pagination';
import { useSearchParams } from 'react-router-dom';

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
}

interface IApiGetPlanetsVars {
  search?: string;
  page?: string | null;
}

const API = {
  getPlanets: async ({ search = '', page }: IApiGetPlanetsVars) => {
    return fetch(
      `https://swapi.dev/api/planets?page=${page || 1}&search=${search}`,
    ).then(res => res.json());
  },
};

function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchLS, setSearchLS] = useLocalStorageState(LS_SEARCH_UNIQ_KEY);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');

  const handleSubmit = useCallback(
    async (search: string) => {
      setLoading(true);
      setSearchParams({ page: '1' });
      const res = await API.getPlanets({ search });
      setLoading(false);
      setItems(res.results);
      setCount(res.count);
      setSearchLS(search);
    },
    [setSearchLS, setSearchParams],
  );

  useEffect(() => {
    setLoading(true);
    API.getPlanets({ page: currentPage, search: searchLS }).then(res => {
      setLoading(false);
      setItems(res.results);
      setCount(res.count);
    });
  }, [currentPage, searchLS]);

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
          <CardList items={items} loading={loading} />
          <Pagination totalPages={Math.ceil(count / ITEMS_PER_PAGE)} />
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default App;
