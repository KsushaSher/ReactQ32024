import { describe, it, expect } from 'vitest';
import { getIsSelected } from './selectors';
import { makeStore } from './store';

describe('getIsSelected selector', () => {
  it('should return true if the id is in the selected array', () => {
    const store = makeStore({ planets: { selected: ['planet1', 'planet2'] } });
    const result = getIsSelected(store.getState(), 'planet1');
    expect(result).toBe(true);
  });

  it('should return false if the id is not in the selected array', () => {
    const store = makeStore();
    const result = getIsSelected(store.getState(), 'planet4');
    expect(result).toBe(false);
  });

  it('should return false if the selected array is empty', () => {
    const store = makeStore();
    const result = getIsSelected(store.getState(), 'planet1');
    expect(result).toBe(false);
  });
});
