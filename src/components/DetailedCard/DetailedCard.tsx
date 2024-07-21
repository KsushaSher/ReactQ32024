import { useNavigate, useSearchParams } from 'react-router-dom';
import Loader from '../Loader';
import { planetsApi } from '../../store/services/planetsApi';

function DetailedCard() {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const id = search.get('id');
  const { data, isFetching } = planetsApi.useGetPlanetQuery({
    id,
  });

  const handleClick = () => {
    search.delete('id');
    navigate({ pathname: '/', search: search.toString() });
  };

  if (isFetching)
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
