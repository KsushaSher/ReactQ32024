import { renderWithEnv } from '../tests/utils';
import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import { setTestAttrs } from '../tests/getTestAttrs';

describe('App component', () => {
  //   it('should save the entered value in local storage when the "Search" button is pressed', () => {
  //     renderWithEnv(<Planets />);
  //     const button = screen.getByTestId('search-form-button');
  //     const input = screen.getByTestId('search-form-input');
  //     fireEvent.change(input, { target: { value: 'test' } });
  //     fireEvent.click(button);
  //     expect(localStorage.getItem(LS_SEARCH_UNIQ_KEY)).toEqual('test');
  //   });

  it('fetches planets', async () => {
    renderWithEnv(<App />);
    const planetsElement = await screen.findAllByTestId('card');
    expect(planetsElement).toHaveLength(4);
  });

  it('fetches planet 2', async () => {
    renderWithEnv(<App />);
    const buttonOpen = await screen.findByTestId(
      setTestAttrs({ id: 'card-button-open', value: '1' }),
    );
    fireEvent.click(buttonOpen);
    const detailedCard = await screen.findByTestId('detailed-card');

    expect(detailedCard).toHaveTextContent('gravity: 1 standard');
  });
});

// test('fetches a single planet', async () => {
//   renderWithEnv(<App />);

//   const planetElement = await screen.findByText(/Tatooine/i);
//   expect(planetElement).toBeInTheDocument();
// });
