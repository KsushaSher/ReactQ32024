import { useCallback } from 'react';
import SearchForm from './components/SearchForm';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';
import { ITEMS_PER_PAGE, LS_SEARCH_UNIQ_KEY } from './constants';
import { useLocalStorageState } from './useLocalStorage';
import Pagination from './components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { planetsApi } from './store/services/planetsApi';

function Planets() {
  const [searchLS, setSearchLS] = useLocalStorageState(LS_SEARCH_UNIQ_KEY);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page');
  const { data, isFetching } = planetsApi.useGetPlanetsQuery({
    page: currentPage,
    search: searchLS,
  });
  const { results, count = 0 } = data || {};

  const handleSubmit = useCallback(
    (search: string) => {
      setSearchParams({ page: '1' });
      setSearchLS(search);
    },
    [setSearchLS, setSearchParams],
  );

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
          <CardList items={results} loading={isFetching} />
          <Pagination totalPages={Math.ceil(count / ITEMS_PER_PAGE)} />
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default Planets;
