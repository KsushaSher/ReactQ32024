import { IItem } from '../../store/apiTypes';
import { getTestAttrs } from '../../../tests/getTestAttrs';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setSelected } from '../../store/planetsSlice';
import { getIsSelected } from '../../store/selectors/selectors';
import { useRouter } from 'next/router';
import React from 'react';

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
  const router = useRouter();
  const page = router.query.page || '1';
  const dispatch = useAppDispatch();
  const isSelected = useAppSelector(s => getIsSelected(s, id));

  const handleToggle = () => dispatch(setSelected(id));
  const handleOpenDetailedCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push({ query: { page, id } }, undefined, { shallow: true });
  };

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
        {...getTestAttrs({ id: 'card-button-open', value: item.url })}
        className="button_close_open"
        onClick={handleOpenDetailedCard}
      >
        Open detailed card
      </button>
    </div>
  );
}

export default Card;
