import { useAppDispatch, useAppSelector } from '../../store/hook';
import { reset } from '../../store/planetsSlice';
import { getCount } from '../../store/selectos';

const FlyoutElement = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(s => getCount(s));

  const handleClickReset = () => {
    dispatch(reset());
  };

  const handleClickSaved = () => {};

  if (count > 0) {
    return (
      <div>
        <p> Выбрано {count} элемент(ов)</p>
        <button onClick={handleClickReset}>Отменить выбор всех</button>
        <button onClick={handleClickSaved}>Загрузить</button>
      </div>
    );
  } else {
    return null;
  }
};

export default FlyoutElement;
