import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';
import React from 'react';

describe('ErrorBoundary', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders error message and details when an error occurs', () => {
    const ProblemChild = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Go to main')).toBeInTheDocument();
  });

  it('calls componentDidCatch when an error is thrown', () => {
    const ProblemChild = () => {
      throw new Error('Test Error');
    };

    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
