import { fireEvent, render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';
import { LS_SEARCH_UNIQ_KEY } from '../../constants';

describe('SearchForm Component', () => {
  it('should save the entered value in local storage when the "Search" button is pressed', () => {
    const handleOnSubmit = (search: string) => {
      localStorage.setItem(LS_SEARCH_UNIQ_KEY, search);
    };
    render(<SearchForm onSubmit={handleOnSubmit} initialSearch="" />);
    const button = screen.getByTestId('search-form-button');
    const input = screen.getByTestId('search-form-input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(localStorage.getItem(LS_SEARCH_UNIQ_KEY)).toEqual('test');
  });

  it('should be retrieved the value from local storage on mount', () => {
    render(<SearchForm onSubmit={() => {}} initialSearch="test" />);
    const input = screen.getByTestId('search-form-input');
    expect(input).toHaveValue('test');
  });
});
