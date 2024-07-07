import React from 'react';
import { IItem } from '../App';

interface ISearchResultsProps {
  items: IItem[];
}
interface ISearchResultsState {}

class SearchResults extends React.Component<
  ISearchResultsProps,
  ISearchResultsState
> {
  constructor(props: ISearchResultsProps) {
    super(props);
  }
  render(): React.ReactNode {
    if (this.props.items.length > 0)
      return (
        <div className="results">
          {this.props.items.map(e => (
            <div className="item" key={e.url}>
              <p>name: {e.name}</p>
              <p>orbital period: {e.orbital_period}</p>
            </div>
          ))}
        </div>
      );
    else return <div className="results">empty...</div>;
  }
}

export default SearchResults;
