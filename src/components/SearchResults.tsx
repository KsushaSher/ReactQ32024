import React from 'react';

interface IItem {
  id: number;
  name: string;
  description: string;
  price: string;
}

interface ISearchResultsProps {}
interface ISearchResultsState {
  items: IItem[];
}

class SearchResults extends React.Component<
  ISearchResultsProps,
  ISearchResultsState
> {
  constructor(props: ISearchResultsProps) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'S’mores Frappuccino',
          description:
            'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
          price: '$5.50',
        },
        {
          id: 2,
          name: 'Caramel Macchiato',
          description:
            'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.',
          price: '$5.00',
        },
      ],
    };
  }
  render(): React.ReactNode {
    if (this.state.items.length > 0)
      return (
        <div className="results">
          {this.state.items.map(e => (
            <div className="item" key={e.id}>
              <p>name: {e.name}</p>
              <p>small description: {e.description}</p>
            </div>
          ))}
        </div>
      );
    else return <div className="results">empty...</div>;
  }
}

export default SearchResults;

fetch('https://swapi.dev/api/planets')
  .then(res => res.json())
  .then(res => console.log(res));
