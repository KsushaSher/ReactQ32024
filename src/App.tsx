import { ReactNode } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import React from 'react';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
  population: number;
}

interface IAppState {
  items: IItem[];
}

class App extends React.Component<Record<string, never>, IAppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { items: [] };
  }

  handleSubmit = (search: string) => {
    fetch(`https://swapi.dev/api/planets?search=${search}`)
      .then(res => res.json())
      .then(res => this.setState({ items: res.results }));
  };

  render(): ReactNode {
    return (
      <ErrorBoundary>
        <main>
          <header>
            <div className="header_content">
              <SearchForm onSubmit={this.handleSubmit} />
              <ButtonError />
            </div>
          </header>
          <section>
            <SearchResults items={this.state.items} />
          </section>
        </main>
      </ErrorBoundary>
    );
  }
}

export default App;
