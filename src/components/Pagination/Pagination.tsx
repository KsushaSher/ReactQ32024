import { useSearchParams } from 'react-router-dom';

interface IProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setSearchParams({ page: String(page) });
    }
  };

  if (totalPages < 1) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Предыдущая
      </button>
      <span>
        Страница {currentPage} из {totalPages}{' '}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Следующая
      </button>
    </div>
  );
};

export default Pagination;
