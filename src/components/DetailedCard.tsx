import { IItem } from '../App';

interface IProps {
  item: IItem;
}

function DetailedCard({ item }: IProps) {
  return (
    <div>
      <div className="item" key={item.url}>
        <p>name: {item.name}</p>
        <p>orbital period: {item.orbital_period}</p>
        <p>population: {item.population}</p>
      </div>
    </div>
  );
}

export default DetailedCard;
