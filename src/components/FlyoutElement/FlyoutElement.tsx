import { useAppDispatch, useAppSelector } from '../../store/hook';
import { planetsApi } from '../../store/planetsApi';
import { reset } from '../../store/planetsSlice';
import { getArraySelectedId, getCount } from '../../store/selectors';
import Papa from 'papaparse';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(getCount);
  const arrayId = useAppSelector(getArraySelectedId);
  const [getPlanet] = planetsApi.useLazyGetPlanetQuery();

  const handleClickReset = () => {
    dispatch(reset());
  };

  const handleClickDownload = async () => {
    const promises = arrayId.map(id => getPlanet({ id }));
    const res = await Promise.all(promises);
    // console.log('res:', res);

    const csvFile = res.map(item => ({
      name: item.data?.name,
      'orbital period': item.data?.orbital_period,
      population: item.data?.population,
      'rotation period': item.data?.rotation_period,
      diameter: item.data?.diameter,
      climate: item.data?.climate,
      gravity: item.data?.gravity,
      terrain: item.data?.terrain,
      'surface water': item.data?.surface_water,
    }));
    const csv = Papa.unparse(csvFile);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${res.length}_elements.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (count > 0) {
    return (
      <div className="flyout_element">
        <p> Выбрано элементов: {count}</p>
        <button onClick={handleClickReset} className="click_reset">
          Отменить выбор
        </button>
        <button onClick={handleClickDownload} className="click_download">
          Загрузить
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default FlyoutElement;
