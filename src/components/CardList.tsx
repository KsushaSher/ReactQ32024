import { Outlet } from 'react-router-dom';
import Card from './Card';
import { IItem } from '../api';
import Loader from './Loader';

interface IProps {
  items: IItem[];
  loading: boolean;
}

function CardList({ items, loading }: IProps) {
  return (
    <div className="right_and_left_section">
      <div className="left_section_search_result">
        {loading ? (
          <Loader />
        ) : (
          <>
            {items.length === 0 && 'Empty...'}
            {items.map(item => (
              <Card item={item} key={item.url} />
            ))}
          </>
        )}
      </div>
      <div className="right_section_detailed_card">
        <Outlet />
      </div>
    </div>
  );
}

export default CardList;
