import { screen } from '@testing-library/react';
import CardList from './CardList';
import { IItem } from '../../api';
import { render } from '../../../tests/utils';

const CARDS_MOCK: IItem[] = [
  { name: '1', orbital_period: 1, population: 1, url: '1' },
  { name: '2', orbital_period: 2, population: 2, url: '2' },
  { name: '3', orbital_period: 3, population: 3, url: '3' },
];

describe('CardList Component', () => {
  test('renders the correct number of Card components', () => {
    render(<CardList items={CARDS_MOCK} loading={false} />);

    const cardElements = screen.getAllByTestId('card');

    expect(cardElements).toHaveLength(CARDS_MOCK.length);
  });
});
