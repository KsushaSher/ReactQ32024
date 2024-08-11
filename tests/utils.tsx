import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../src/store/store';

export const renderWithEnv = (ui: React.ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={createStore()}>{children}</Provider>
    ),
  });
};
