import { screen } from '@testing-library/react';
import CardList from './CardList';
import { IItem } from '../../api';
import { renderWithEnv } from '../../../tests/utils';

const CARDS_MOCK: IItem[] = [
  { name: '1', orbital_period: 1, population: 1, url: '1' },
  { name: '2', orbital_period: 2, population: 2, url: '2' },
  { name: '3', orbital_period: 3, population: 3, url: '3' },
];

describe('CardList Component', () => {
  it('renders the correct number of Card components', () => {
    renderWithEnv(<CardList items={CARDS_MOCK} />);
    const cardElements = screen.getAllByTestId('card');
    expect(cardElements).toHaveLength(CARDS_MOCK.length);
  });

  it('should display a message when there are no cards', () => {
    renderWithEnv(<CardList items={[]} />);
    expect(screen.getByText('Empty...')).toBeInTheDocument();
  });

  it('should display a Loader when loading', () => {
    renderWithEnv(<CardList items={[]} loading />);
    expect(screen.getAllByTestId('loader')).toHaveLength(1);
  });
});
