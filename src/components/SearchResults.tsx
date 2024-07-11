import { IItem } from '../App';

interface IProps {
  items: IItem[];
}

function SearchResults(props: IProps) {
  return (
    <div className="search_result">
      {props.items.map(e => (
        <div className="item" key={e.url}>
          <p>name: {e.name}</p>
          <p>orbital period: {e.orbital_period}</p>
          <p>population: {e.population}</p>
        </div>
      ))}
      {props.items.length === 0 && 'empty...'}
    </div>
  );
}

export default SearchResults;
