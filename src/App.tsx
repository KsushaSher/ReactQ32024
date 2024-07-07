import { ReactNode } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import React from 'react';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import ButtonError from './components/ButtonError';

type EmptyType = Record<string, never>;

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
}

interface IAppState {
  items: IItem[];
}

class App extends React.Component<EmptyType, IAppState> {
  constructor(props: EmptyType) {
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
            <SearchForm onSubmit={this.handleSubmit} />
            <ButtonError />
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
