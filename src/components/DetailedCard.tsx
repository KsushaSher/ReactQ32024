import { useState } from 'react';
import { IItem } from '../App';

interface IProps {
  item: IItem;
}

function DetailedCard({ item }: IProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  if (isOpen)
    return (
      <div className="item" key={item.url}>
        <p>name: {item.name}</p>
        <p>orbital period: {item.orbital_period}</p>
        <p>population: {item.population}</p>
        <button onClick={handleClick} className="button_close_open">
          close detailed card
        </button>
      </div>
    );
  return null;
}

export default DetailedCard;
