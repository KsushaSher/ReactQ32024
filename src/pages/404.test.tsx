import { renderWithEnv } from '../../tests/utils';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('Error page', () => {
  it('should appear a page with an inscription when you click on the button', async () => {
    renderWithEnv(<App />);
    const buttonError = await screen.findByTestId('error-button');
    fireEvent.click(buttonError);
    const main = await screen.findByTestId('main');
    expect(main).toHaveTextContent('Something went wrong');
  });
});
