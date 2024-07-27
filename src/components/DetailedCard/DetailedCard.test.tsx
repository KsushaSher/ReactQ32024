// import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeStore } from '../../store/store';
import { planetsApi } from '../../store/planetsApi';
import DetailedCard from './DetailedCard';
import { IDetailItem } from '../../api';

const navigate = vi.fn();
// Мокирование useNavigate и useSearchParams
vi.mock('react-router-dom', async importOriginal => {
  const actual: Record<string, unknown> = await importOriginal();
  return {
    ...actual,
    useNavigate: () => navigate,
    useSearchParams: () => [new URLSearchParams('?id=1')],
  };
});

// Мокирование API запроса
const mockPlanetData: IDetailItem = {
  url: '1',
  name: 'Tatooine',
  orbital_period: 304,
  population: 200000,
  rotation_period: 23,
  diameter: 10465,
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: 1,
};

const server = makeStore();

describe('DetailedCard component', () => {
  it('should display a loading indicator while fetching data', async () => {
    render(
      <Provider store={server}>
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.queryByTestId('loader'));
  });

  it('should correctly display the detailed card data', async () => {
    planetsApi.useGetPlanetQuery = vi.fn().mockReturnValue({
      data: mockPlanetData,
      isFetching: false,
    });

    render(
      <Provider store={server}>
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/name: Tatooine/i)).toBeInTheDocument();
      expect(screen.getByText(/orbital period: 304/i)).toBeInTheDocument();
      expect(screen.getByText(/population: 200000/i)).toBeInTheDocument();
      expect(screen.getByText(/rotation_period: 23/i)).toBeInTheDocument();
      expect(screen.getByText(/diameter: 10465/i)).toBeInTheDocument();
      expect(screen.getByText(/climate: arid/i)).toBeInTheDocument();
      expect(screen.getByText(/gravity: 1 standard/i)).toBeInTheDocument();
      expect(screen.getByText(/terrain: desert/i)).toBeInTheDocument();
      expect(screen.getByText(/surface_water: 1/i)).toBeInTheDocument();
    });
  });

  it('should hide the component when the close button is clicked', async () => {
    planetsApi.useGetPlanetQuery = vi.fn().mockReturnValue({
      data: mockPlanetData,
      isFetching: false,
    });

    render(
      <Provider store={server}>
        <BrowserRouter>
          <DetailedCard />
        </BrowserRouter>
      </Provider>,
    );

    const closeButton = screen.getByRole('button', {
      name: /close detailed card/i,
    });
    await fireEvent.click(closeButton);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith({ pathname: '/', search: '' });
    });
  });
});
