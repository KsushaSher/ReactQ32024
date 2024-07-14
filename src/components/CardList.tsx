import { IItem } from '../App';
import Card from './Card';

interface IProps {
  items: IItem[];
  loading: boolean;
}

function CardList({ items, loading }: IProps) {
  return (
    <div className="search_result">
      {loading ? (
        'Loading...'
      ) : (
        <>
          {items.length === 0 && 'Empty...'}
          {items.map(item => (
            <Card item={item} key={item.url} />
          ))}
        </>
      )}
    </div>
  );
}

export default CardList;
