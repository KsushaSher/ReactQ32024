import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const server = setupServer(
  http.get('https://swapi.dev/api/planets', (/* info */) => {
    return HttpResponse.json({
      results: [
        { name: 'Tatooine', population: '200000', url: '1' },
        { name: 'Alderaan', population: '2000000000', url: '2' },
      ],
      count: 2,
      next: null,
      prev: null,
    });
  }),
  http.get('https://swapi.dev/api/planets/:id', info => {
    const { id } = info.params;
    if (id === '1') {
      return HttpResponse.json({
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        population: '200000',
      });
    }
  }),
);
