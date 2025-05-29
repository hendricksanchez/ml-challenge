import { useRouter } from "next/router";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbItem {
  id: string;
  name: string;
}

interface IBreadcrumb {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: IBreadcrumb) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  if (!items.length) return null;

  return (
    <nav className={styles["breadcrumb"]} aria-label="Breadcrumb">
      <span className={styles["breadcrumb__go-back"]} onClick={handleGoBack}>
        Volver el listado
      </span>
      &nbsp; | &nbsp;
      <ol className={styles["breadcrumb__list"]}>
        {items.map((item, index) => (
          <li key={item.id} className={styles["breadcrumb__item"]}>
            {item.name}
            {index < items.length - 1 && (
              <span className={styles["breadcrumb__separator"]}>{">"}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
