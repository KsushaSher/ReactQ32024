import { useRouter } from 'next/router';
import DetailedCard from '../../components/DetailedCard';
import App from '../../components/App';

const Detailed = () => {
  const router = useRouter();

  return (
    <App>
      <DetailedCard id={String(router.query.id)} />
    </App>
  );
};

export default Detailed;
