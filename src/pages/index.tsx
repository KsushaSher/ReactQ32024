import React, { useCallback } from 'react';
import SearchForm from '../components/SearchForm';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import ButtonError from '../components/ButtonError';
import Pagination from '../components/Pagination';
import FlyoutElement from '../components/FlyoutElement';
import DarkLightButton from '../components/DarkLightButton';
import { useTheme } from '../components/Context/hooks';
import { ITEMS_PER_PAGE, LS_SEARCH_UNIQ_KEY } from '../constants';
import { planetsApi } from '../store/planetsApi';
import { getTestAttrs } from '../../tests/getTestAttrs';
import { useRouter } from 'next/router';

import wrapper from '../store/store';
import DetailedCard from '../components/DetailedCard';
import { getCookie, setCookie } from '../utils/cookie';

const { getPlanets, getPlanet } = planetsApi.endpoints;

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, query }) => {
      const search = getCookie(req.headers.cookie, LS_SEARCH_UNIQ_KEY);
      const { page, id } = query;

      store.dispatch(getPlanets.initiate({ page: String(page || 1), search }));
      id && store.dispatch(getPlanet.initiate({ id: String(id) }));

      await Promise.all(
        store.dispatch(planetsApi.util.getRunningQueriesThunk()),
      );

      return { props: { search } };
    },
);

const Home: React.FC<{ search: string }> = ({ search }) => {
  const theme = useTheme();
  const router = useRouter();
  const { id, page } = router.query;

  const { data, isFetching } = planetsApi.useGetPlanetsQuery({
    page: String(page || 1),
    search: search,
  });

  const { results, count = 0 } = data || {};

  const handleSubmit = useCallback(
    (search: string) => {
      router.push({ query: 'page=1' });
      setCookie(LS_SEARCH_UNIQ_KEY, search);
    },
    [router],
  );

  const handleCloseDetailedCard = () =>
    router.push({ query: { page } }, undefined, {
      shallow: true,
    });

  return (
    <ErrorBoundary>
      <main {...getTestAttrs({ id: 'main' })} className={theme}>
        <header>
          <div className="header_content">
            <SearchForm onSubmit={handleSubmit} initialSearch={search} />
            <div className="header_right_side">
              <DarkLightButton />
              <ButtonError />
            </div>
          </div>
        </header>
        <section>
          <div className="right_and_left_section">
            <div
              className="left_section_search_result"
              onClick={handleCloseDetailedCard}
            >
              <CardList items={results} loading={isFetching} />
            </div>
            <div className="right_section_detailed_card">
              {id && <DetailedCard id={String(id)} />}
            </div>
          </div>
          <Pagination totalPages={Math.ceil(count / ITEMS_PER_PAGE)} />
          <FlyoutElement />
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
