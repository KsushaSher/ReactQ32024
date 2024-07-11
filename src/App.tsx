import { useCallback, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
}

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = useCallback((search: string) => {
    fetch(`https://swapi.dev/api/planets?search=${search}`)
      .then(res => res.json())
      .then(res => setItems(res.results));
  }, []);

  return (
    <ErrorBoundary>
      <main>
        <header>
          <div className="header_content">
            <SearchForm onSubmit={handleSubmit} />
            <ButtonError />
          </div>
        </header>
        <section>
          <SearchResults items={items} />
        </section>
      </main>
    </ErrorBoundary>
  );
}

export default App;
