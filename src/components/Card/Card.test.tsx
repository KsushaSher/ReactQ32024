import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Card from './Card';
import { IItem } from '../../store/apiTypes';
import { renderWithEnv } from '../../../tests/utils';
import { Route, Routes } from 'react-router-dom';
import { setTestAttrs } from '../../../tests/getTestAttrs';

const ITEM_MOCK: IItem = {
  name: 'CARD_NAME',
  orbital_period: 1,
  population: 2,
  url: 'https://swapi.dev/api/planets/2/',
};

describe('Card Component', () => {
  it('should display the card content', () => {
    renderWithEnv(<Card item={ITEM_MOCK} />);
    expect(screen.getByTestId('card-name')).toBeInTheDocument();
    expect(screen.getByTestId('card-orbital_period')).toBeInTheDocument();
    expect(screen.getByTestId('card-population')).toBeInTheDocument();
  });
  it('should open a detailed card component when clicked', async () => {
    renderWithEnv(
      <Routes>
        <Route path="/" element={<Card item={ITEM_MOCK} />} />
        <Route path="/details" element={<div>Details Page</div>} />
      </Routes>,
    );

    const button = screen.getByTestId(
      setTestAttrs({ id: 'card-button-open', value: ITEM_MOCK.url }),
    );
    fireEvent.click(button);

    expect(screen.getByText('Details Page')).toBeInTheDocument();
  });
});
