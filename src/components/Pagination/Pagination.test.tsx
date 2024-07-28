import { fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination';
import { renderWithEnv } from '../../../tests/utils';

describe('Pagination component', () => {
  it('should update the URL query parameter when the page is changed', () => {
    renderWithEnv(<Pagination totalPages={5} />);
    const prevButton = screen.getByRole('button', { name: /Предыдущая/i });
    const nextButton = screen.getByRole('button', { name: /Следующая/i });
    fireEvent.click(nextButton);
    expect(location.search).toBe('?page=2');
    fireEvent.click(prevButton);
    expect(location.search).toBe('?page=1');
  });
});
