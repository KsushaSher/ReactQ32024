import '@testing-library/jest-dom';
import { afterAll, beforeAll } from 'vitest';
import { server } from './src/mocks/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
