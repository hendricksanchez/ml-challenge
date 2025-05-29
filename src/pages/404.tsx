import Link from "next/link";
import styles from "@/shared/styles/ErrorPage.module.scss";

export default function Custom404() {
  return (
    <div className={styles["error-page"]}>
      <p className={styles["error-page__message"]}>
        Lo sentimos, no pudimos encontrar el producto o página que estás
        buscando.
      </p>
      <Link href="/" className={styles["error-page__link"]}>
        Volver al inicio
      </Link>
    </div>
  );
}
