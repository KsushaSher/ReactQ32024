import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../store/store';
import DetailedCard from './DetailedCard';

const server = createStore();

describe('DetailedCard component', () => {
  it('should correctly display the detailed card data', async () => {
    render(
      <Provider store={server}>
        <DetailedCard id={'1'} />
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
});
