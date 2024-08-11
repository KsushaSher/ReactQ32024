import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../store/store';
import FlyoutElement from './FlyoutElement';
import { setTestAttrs } from '../../../tests/getTestAttrs';
import { getArraySelectedId } from '../../store/selectors/selectors';

describe('DetailedCard component', () => {
  it('should correctly display the count selected cards', async () => {
    render(
      <Provider store={createStore({ planets: { selected: ['1', '2'] } })}>
        <FlyoutElement />
      </Provider>,
    );

    expect(
      await screen.findByTestId(
        setTestAttrs({ id: 'flyout_element', value: '2' }),
      ),
    ).toBeInTheDocument();
  });
  it('should correctly reset', async () => {
    const store = createStore({ planets: { selected: ['1', '2'] } });
    render(
      <Provider store={store}>
        <FlyoutElement />
      </Provider>,
    );

    const resetButton = await screen.findByTestId('flyout_element_reset');
    fireEvent.click(resetButton);

    expect(getArraySelectedId(store.getState())).toEqual([]);
  });
});
