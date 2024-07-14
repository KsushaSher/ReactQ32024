import { useNavigate, useSearchParams } from 'react-router-dom';
import { IItem } from '../api';

interface IProps {
  item: IItem;
}

function Card({ item }: IProps) {
  const navigate = useNavigate();
  const [search] = useSearchParams();

  const handleClick = () => {
    const id = item.url
      .split('/')
      .filter(i => i)
      .pop();
    navigate({ pathname: `/details/${id}`, search: search.toString() });
  };

  return (
    <div className="item" key={item.url}>
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
