import Card from '../Card';
import { IItem } from '../../store/apiTypes';
import Loader from '../Loader';

interface IProps {
  items?: IItem[];
  loading?: boolean;
}

const CardList: React.FC<IProps> = ({ items, loading }) => {
  if (loading) return <Loader />;
  if (!items?.length) return 'Empty...';
  return items?.map(item => <Card item={item} key={item.url} />);
};

export default CardList;
