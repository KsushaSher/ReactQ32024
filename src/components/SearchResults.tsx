import React from 'react';
import { IItem } from '../App';

interface IProps {
  items: IItem[];
}
interface IState {}

class SearchResults extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="search_result">
        {this.props.items.map(e => (
          <div className="item" key={e.url}>
            <p>name: {e.name}</p>
            <p>orbital period: {e.orbital_period}</p>
            <p>population: {e.population}</p>
          </div>
        ))}
        {this.props.items.length === 0 && 'empty...'}
      </div>
    );
  }
}

export default SearchResults;
