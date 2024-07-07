import { ReactNode } from 'react';
import './App.css';
import Input from './components/Input';
import React from 'react';
import SearchResults from './components/SearchResults';
import Button from './components/Button';

type EmptyType = Record<string, never>;

export interface IItem {
  url: string;
  name: string;
  orbital_period: number;
}

interface IAppState {
  search: string;
  items: IItem[];
}

class App extends React.Component<EmptyType, IAppState> {
  constructor(props: EmptyType) {
    super(props);
    this.state = { search: '', items: [] };
  }

  componentDidMount(): void {
    fetch('https://swapi.dev/api/planets')
      .then(res => res.json())
      .then(res => this.setState({ items: res.results }));
  }

  handleSearch = (search: string) => {
    this.setState({ search });
  };

  handleSearchClick = () => {
    fetch(`https://swapi.dev/api/planets?search=${this.state.search}`)
      .then(res => res.json())
      .then(res => this.setState({ items: res.results }));
  };

  render(): ReactNode {
    console.log(this.state);

    return (
      <main>
        <header>
          <Input
            placeholder="Search"
            onChange={this.handleSearch}
            value={this.state.search}
          />
          <Button onClick={this.handleSearchClick} />
        </header>
        <section>
          <SearchResults items={this.state.items} />
        </section>
      </main>
    );
  }
}

export default App;
