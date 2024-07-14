import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Card from './Card';
import { IItem } from '../api';
import Loader from './Loader';

interface IProps {
  items: IItem[];
  loading: boolean;
}

function CardList({ items, loading }: IProps) {
  const navigate = useNavigate();
  const [search] = useSearchParams();

  const handleOnClick = () => {
    search.delete('id');
    navigate({ pathname: '/', search: search.toString() });
  };

  return (
    <div className="right_and_left_section">
      <div className="left_section_search_result" onClick={handleOnClick}>
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
