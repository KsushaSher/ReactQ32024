import { useState } from 'react';
import { IItem } from '../App';
import DetailedCard from './DetailedCard';

interface IProps {
  item: IItem;
}

function Card({ item }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
    console.log('click more button');
  };
  return (
    <div>
      <div className="item" key={item.url}>
        <p>name: {item.name}</p>
        <p>orbital period: {item.orbital_period}</p>
        <p>population: {item.population}</p>
        {isOpen && <DetailedCard item={item} />}
      </div>
      <div>
        <button onClick={handleClick}>{isOpen ? 'close' : 'open'}</button>
      </div>
    </div>
  );
}

export default Card;
