import styles from "./Pagination.module.scss";

interface Props {
  total: number;
  offset: number;
  limit: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({ total, offset, limit, onPageChange }: Props) => {
  const currentPage = Math.floor(offset / limit);
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        // onClick={() => onPageChange(index)}
        disabled={currentPage === 0}
        className={`${styles.pagination__button}`}
      >
        {`<`}
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`${styles.pagination__button} ${
            index === currentPage ? styles["pagination__button--active"] : ""
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        // onClick={() => onPageChange(index)}
        disabled={currentPage === totalPages - 1}
        className={`${styles.pagination__button}`}
      >
        {`>`}
      </button>
    </div>
  );
};
