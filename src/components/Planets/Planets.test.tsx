import { fireEvent, screen } from '@testing-library/react';
import { renderWithEnv } from '../../../tests/utils';
import { LS_SEARCH_UNIQ_KEY } from '../../constants';
import Planets from './Planets';
import App from '../../App';

describe('Planets Component', () => {
  it('should save the entered value in local storage when the "Search" button is pressed', () => {
    renderWithEnv(<Planets />);
    const button = screen.getByTestId('search-form-button');
    const input = screen.getByTestId('search-form-input');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(localStorage.getItem(LS_SEARCH_UNIQ_KEY)).toEqual('test');
  });
});

test('fetches planets', async () => {
  renderWithEnv(<App />);

  const planetElement = await screen.findByText(/Tatooine/i);
  expect(planetElement).toBeInTheDocument();
});

// test('fetches a single planet', async () => {
//   renderWithEnv(<App />);

//   const planetElement = await screen.findByText(/Tatooine/i);
//   expect(planetElement).toBeInTheDocument();
// });
