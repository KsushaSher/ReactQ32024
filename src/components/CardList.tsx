import { IItem } from '../App';
import Card from './Card';

interface IProps {
  items: IItem[];
}

function CardList({ items }: IProps) {
  return (
    <div className="search_result">
      {items.map(item => (
        <Card item={item} key={item.url} />
      ))}
      {items.length === 0 && 'empty...'}
    </div>
  );
}

export default CardList;
