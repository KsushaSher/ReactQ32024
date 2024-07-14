import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { API, IDetailItem } from '../api';
import { useEffect, useState } from 'react';
import Loader from './Loader';

function DetailedCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const [data, setData] = useState<IDetailItem | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    navigate({ pathname: '/', search: search.toString() });
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      API.getPlanet(id).then(res => {
        setData(res);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="item" key={data?.url}>
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
