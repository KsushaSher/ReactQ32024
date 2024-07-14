import { useNavigate, useSearchParams } from 'react-router-dom';
import { IItem } from '../../api';
import { getTestAttrs } from '../../../tests/getTestAttrs';

interface IProps {
  item: IItem;
}

function Card({ item }: IProps) {
  const navigate = useNavigate();
  const [search] = useSearchParams();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const id = item.url
      .split('/')
      .filter(i => i)
      .pop();
    if (id) {
      search.set('id', id);
      navigate({ pathname: `/details`, search: search.toString() });
    }
  };

  return (
    <div {...getTestAttrs({ id: 'card' })} className="item">
      <p>name: {item.name}</p>
      <p>orbital period: {item.orbital_period}</p>
      <p>population: {item.population}</p>
      <button onClick={handleClick} className="button_close_open">
        Open detailed card
      </button>
    </div>
  );
}

export default Card;
