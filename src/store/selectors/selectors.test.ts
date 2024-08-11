import { describe, it, expect } from 'vitest';
import { getArraySelectedId, getCount, getIsSelected } from './selectors';
import { createStore } from '../store';

describe('getIsSelected selector', () => {
  it('should return true if the id is in the selected array', () => {
    const store = createStore({
      planets: { selected: ['planet1', 'planet2'] },
    });
    const result = getIsSelected(store.getState(), 'planet1');
    expect(result).toBe(true);
  });

  it('should return false if the id is not in the selected array', () => {
    const store = createStore({
      planets: { selected: ['planet1', 'planet2'] },
    });
    const result = getIsSelected(store.getState(), 'planet3');
    expect(result).toBe(false);
  });

  it('should return false if the selected array is empty', () => {
    const store = createStore();
    const result = getIsSelected(store.getState(), 'planet');
    expect(result).toBe(false);
  });
});

describe('getCount selector', () => {
  it('should return true if the array length is correct', () => {
    const store = createStore({
      planets: { selected: ['planet1', 'planet2'] },
    });
    const result = getCount(store.getState());
    expect(result).toBe(2);
  });
  it('should return true if the array length is correct when the array is empty', () => {
    const store = createStore();
    const result = getCount(store.getState());
    expect(result).toBe(0);
  });
});

describe('getArraySelectedId selector', () => {
  it('should return true if the array of planets is equal to the array in the store', () => {
    const store = createStore({
      planets: { selected: ['planet1', 'planet2'] },
    });
    const result = getArraySelectedId(store.getState());
    expect(result).toStrictEqual(['planet1', 'planet2']);
  });
  it('should return true if an empty array is returned when the store is empty', () => {
    const store = createStore();
    const result = getArraySelectedId(store.getState());
    expect(result).toStrictEqual([]);
  });
});
