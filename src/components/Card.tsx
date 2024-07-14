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
  };

  return (
    <div className="card">
      <div className="item" key={item.url}>
        <p>name: {item.name}</p>
        <p>orbital period: {item.orbital_period}</p>
        <p>population: {item.population}</p>
        <button onClick={handleClick} className="button_close_open">
          {isOpen ? 'close detailed card' : ' open detailed card'}
        </button>
      </div>
      <div className="detailed_card">
        {isOpen && <DetailedCard item={item} />}
      </div>
    </div>
  );
}

export default Card;
