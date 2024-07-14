import { useNavigate, useSearchParams } from 'react-router-dom';
import { API, IDetailItem } from '../api';
import { useEffect, useState } from 'react';
import Loader from './Loader';

function DetailedCard() {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const id = search.get('id');
  const [data, setData] = useState<IDetailItem | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    search.delete('id');
    navigate({ pathname: '/', search: search.toString() });
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      setData(null);
      API.getPlanet(id).then(res => {
        setData(res);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading)
    return (
      <div className="item">
        <Loader />
      </div>
    );

  if (!data) return null;

  return (
    <div className="item">
      <p>name: {data?.name}</p>
      <p>orbital period: {data?.orbital_period}</p>
      <p>population: {data?.population}</p>
      <p>rotation_period: {data?.rotation_period}</p>
      <p>diameter: {data?.diameter}</p>
      <p>climate: {data?.climate}</p>
      <p>gravity: {data?.gravity}</p>
      <p>terrain: {data?.terrain}</p>
      <p>surface_water: {data?.surface_water}</p>
      <button onClick={handleClick} className="button_close_open">
        close detailed card
      </button>
    </div>
  );
}

export default DetailedCard;
