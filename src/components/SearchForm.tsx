import React from 'react';

interface IProps {
  onSubmit: (search: string) => void;
}

interface IState {
  search: string;
}

class SearchForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { search: localStorage.getItem('search') || '' };
  }

  componentDidMount(): void {
    this.props.onSubmit(this.state.search);
  }

  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    localStorage.setItem('search', this.state.search);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          placeholder="Search"
          onChange={this.handleOnChange}
          value={this.state.search}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;
