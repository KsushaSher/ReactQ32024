import { renderWithEnv } from '../tests/utils';
import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import { setTestAttrs } from '../tests/getTestAttrs';

describe('App component', () => {
  it('should receive all planet cards when you download the app', async () => {
    renderWithEnv(<App />);
    const planetsElement = await screen.findAllByTestId('card');
    expect(planetsElement).toHaveLength(4);
  });

  it('should receive additional details when you click on the button', async () => {
    renderWithEnv(<App />);
    const buttonOpen = await screen.findByTestId(
      setTestAttrs({ id: 'card-button-open', value: '1' }),
    );
    fireEvent.click(buttonOpen);
    const detailedCard = await screen.findByTestId('detailed-card');
    expect(detailedCard).toHaveTextContent('gravity: 1 standard');
  });
});
