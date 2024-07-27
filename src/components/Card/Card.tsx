import { useNavigate, useSearchParams } from 'react-router-dom';
import { IItem } from '../../api';
import { getTestAttrs } from '../../../tests/getTestAttrs';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setSelected } from '../../store/planetsSlice';
import { getIsSelected } from '../../store/selectors';

interface IProps {
  item: IItem;
}

const extractIdFromUrl = (url: string) =>
  url
    .split('/')
    .filter(i => i)
    .pop() || '';

function Card({ item }: IProps) {
  const id = extractIdFromUrl(item.url);
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const dispatch = useAppDispatch();
  const isSelected = useAppSelector(s => getIsSelected(s, id));

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) {
      search.set('id', id);
      navigate({ pathname: `/details`, search: search.toString() });
    }
  };

  const handleToggle = () => dispatch(setSelected(id));

  return (
    <div {...getTestAttrs({ id: 'card' })} className="item">
      <div>
        <p {...getTestAttrs({ id: 'card-name' })}>name: {item.name}</p>
        <p {...getTestAttrs({ id: 'card-orbital_period' })}>
          orbital period: {item.orbital_period}
        </p>
        <p {...getTestAttrs({ id: 'card-population' })}>
          population: {item.population}
        </p>
      </div>
      <input
        type="checkbox"
        className="checkboxCard"
        onChange={handleToggle}
        checked={isSelected}
        onClick={e => e.stopPropagation()}
      />
      <button
        {...getTestAttrs({ id: 'card-button' })}
        onClick={handleClick}
        className="button_close_open"
      >
        Open detailed card
      </button>
    </div>
  );
}

export default Card;
