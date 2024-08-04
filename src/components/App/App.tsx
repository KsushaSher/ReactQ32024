import React, { useCallback } from 'react';
import SearchForm from '../SearchForm';
import CardList from '../CardList';
import ErrorBoundary from '../ErrorBoundary';
import ButtonError from '../ButtonError';
import Pagination from '../Pagination';
import FlyoutElement from '../FlyoutElement';
import DarkLightButton from '../DarkLightButton';
import { useTheme } from '../Context/hooks';
import { useLocalStorageState } from '../../useLocalStorage';
import { ITEMS_PER_PAGE, LS_SEARCH_UNIQ_KEY } from '../../constants';
import { planetsApi } from '../../store/planetsApi';
import { getTestAttrs } from '../../../tests/getTestAttrs';
import Link from 'next/link';

interface IProps {
  children?: React.ReactNode;
}

const Planets: React.FC<IProps> = ({ children }) => {
  const theme = useTheme();
  const [searchLS, setSearchLS] = useLocalStorageState(LS_SEARCH_UNIQ_KEY);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const currentPage = searchParams.get('page');
  const { data, isFetching } = planetsApi.useGetPlanetsQuery({
    page: '1',
    search: searchLS,
  });
  const { results, count = 0 } = data || {};
  console.log(data);

  const handleSubmit = useCallback(
    (search: string) => {
      // setSearchParams({ page: '1' });
      setSearchLS(search);
    },
    [setSearchLS /* setSearchParams */],
  );

  return (
    <ErrorBoundary>
      <main {...getTestAttrs({ id: 'main' })} className={theme}>
        <header>
          <div className="header_content">
            <SearchForm onSubmit={handleSubmit} initialSearch={searchLS} />
            <div className="header_right_side">
              <DarkLightButton />
              <ButtonError />
            </div>
          </div>
        </header>
        <section>
          <div className="right_and_left_section">
            <Link href="/" className="left_section_search_result">
              <CardList items={results} loading={isFetching} />
            </Link>
            <div className="right_section_detailed_card">{children}</div>
          </div>
          <Pagination totalPages={Math.ceil(count / ITEMS_PER_PAGE)} />
          <FlyoutElement />
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default Planets;
