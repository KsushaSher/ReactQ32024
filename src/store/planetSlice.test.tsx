import { initialState, reset, setSelected } from './planetsSlice';
import { getArraySelectedId } from './selectors/selectors';
import { makeStore } from './store';

describe('action setSelected', () => {
  it('should ', () => {
    const store = makeStore();
    store.dispatch(setSelected('1'));
    expect(getArraySelectedId(store.getState())).toStrictEqual(['1']);
  });

  it('should ', () => {
    const store = makeStore();
    store.dispatch(setSelected('1'));
    store.dispatch(setSelected('1'));
    expect(getArraySelectedId(store.getState())).toStrictEqual([]);
  });
});

describe('action reset', () => {
  it('should ', () => {
    const store = makeStore({ planets: { selected: ['1', '2', '3'] } });
    store.dispatch(reset());
    expect(store.getState().planets).toStrictEqual(initialState);
  });
});
