import { useRouter } from 'next/router';

interface IProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: IProps) => {
  const router = useRouter();
  const { page, id } = router.query;

  const currentPage = Number(page) || 1;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      router.push({ query: { page, id } }, undefined, {
        shallow: true,
      });
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
