import { fireEvent, screen } from '@testing-library/react';
import ThemeProvider from './Provider';
import App from '../../App';
import { renderWithEnv } from '../../../tests/utils';

describe('Context component', () => {
  it('should change the theme when you click on the button', async () => {
    renderWithEnv(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );
    const buttonTheme = await screen.findByTestId('theme-button');
    fireEvent.click(buttonTheme);
    const main = await screen.findByTestId('main');
    expect(main).toHaveClass('light');
    fireEvent.click(buttonTheme);
    expect(main).toHaveClass('dark');
  });
});
