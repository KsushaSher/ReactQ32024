import '@testing-library/jest-dom';
import { afterAll, beforeAll, vi } from 'vitest';
import { server } from './src/mocks/server';
beforeAll(() => {
  vi.mock('next/router', () => require('next-router-mock'));
});
beforeAll(() => server.listen());
afterAll(() => server.close());
