import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Card from './Card';
import { IItem } from '../../api';
import { render } from '../../../tests/utils';

const ITEM_MOCK: IItem = {
  name: 'CARD_NAME',
  orbital_period: 1,
  population: 2,
  url: '',
};

describe('Card Component', () => {
  it('should display the card content', () => {
    render(<Card item={ITEM_MOCK} />);
    expect(screen.getByTestId('card-name')).toBeInTheDocument();
    expect(screen.getByTestId('card-orbital_period')).toBeInTheDocument();
    expect(screen.getByTestId('card-population')).toBeInTheDocument();
  });
});
