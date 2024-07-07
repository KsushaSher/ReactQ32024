import { ReactNode } from 'react';
import './App.css';
import Input from './components/Input';
import React from 'react';
import SearchResults from './components/SearchResults';

type EmptyType = Record<string, never>;

interface IAppState {
  search: string;
}

class App extends React.Component<EmptyType, IAppState> {
  state: IAppState = {
    search: '',
  };

  handleSearch = (search: string) => {
    this.setState({ search });
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
        </header>
        <section>
          <SearchResults />
        </section>
      </main>
    );
  }
}

export default App;
