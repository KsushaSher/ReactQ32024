import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { ITEM, LIST } from './mocks';

export const server = setupServer(
  http.get('https://swapi.dev/api/planets', () => {
    return HttpResponse.json({
      results: LIST,
      count: 4,
      next: null,
      prev: null,
    });
  }),
  http.get('https://swapi.dev/api/planets/:id', () => {
    return HttpResponse.json(ITEM);
  }),
);
