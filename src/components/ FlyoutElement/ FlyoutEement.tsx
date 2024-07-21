import { useAppDispatch, useAppSelector } from '../../store/hook';
import { planetsApi } from '../../store/planetsApi';
import { reset } from '../../store/planetsSlice';
import { getArraySelectedId, getCount } from '../../store/selectos';

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
    console.log(res);
  };

  if (count > 0) {
    return (
      <div>
        <p> Выбрано {count} элемент(ов)</p>
        <button onClick={handleClickReset}>Отменить выбор всех</button>
        <button onClick={handleClickDownload}>Загрузить</button>
      </div>
    );
  } else {
    return null;
  }
};

export default FlyoutElement;
