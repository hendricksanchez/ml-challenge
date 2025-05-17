import React from "react";
import Head from "next/head";
import { SearchBox } from "@/shared/components/SearchBox";
import styles from "./MainLayout.module.scss";

interface IMainLayout {
  title?: string;
  children: React.ReactNode;
}

const MainLayout = ({ title = "ML Challenge", children }: IMainLayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Búsqueda y detalle de productos de ML"
        />
      </Head>
      <div className={styles.layout}>
        <header className={styles.layout__header}>
          <SearchBox />
        </header>
        <main className={styles.layout__content}>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
