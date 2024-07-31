import { useCallback } from 'react';
import SearchForm from '../SearchForm';
import CardList from '../CardList';
import ErrorBoundary from '../ErrorBoundary';
import ButtonError from '../ButtonError';
import { ITEMS_PER_PAGE, LS_SEARCH_UNIQ_KEY } from '../../constants';
import { useLocalStorageState } from '../../useLocalStorage';
import Pagination from '../Pagination';
import { useSearchParams } from 'react-router-dom';
import { planetsApi } from '../../store/planetsApi';
import FlyoutElement from '../FlyoutElement';
import DarkLightButton from '../DarkLightButton';

function Planets() {
  const [searchLS, setSearchLS] = useLocalStorageState(LS_SEARCH_UNIQ_KEY);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = searchParams.get('page');
  const { data, isFetching } = planetsApi.useGetPlanetsQuery({
    page: '1',
    search: searchLS,
  });
  const { results, count = 0 } = data || {};

  const handleSubmit = useCallback(
    (search: string) => {
      // setSearchParams({ page: '1' });
      setSearchLS(search);
    },
    [setSearchLS /* setSearchParams */],
  );

  return (
    <ErrorBoundary>
      <main>
        <header>
          <div className="header_content">
            <SearchForm onSubmit={handleSubmit} initialSearch={searchLS} />
            <div className="header_right_side">
              <DarkLightButton />
              <ButtonError />
            </div>
          </div>
        </header>
        {/* <section>
          <CardList items={results} loading={isFetching} />
          <Pagination totalPages={Math.ceil(count / ITEMS_PER_PAGE)} />
          <FlyoutElement />
        </section> */}
      </main>
    </ErrorBoundary>
  );
}

export default Planets;
