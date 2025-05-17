import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import searchIcon from "@/assets/icons/ic_Search.png";
import logoLarge25Years from "@/assets/images/logo_large_25years.png";
import styles from "./SearchBox.module.scss";

export const SearchBox = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/items?search=${encodeURIComponent(query)}&page=0`);
    }
  };

  return (
    <form className={styles["search-box"]} onSubmit={handleSubmit}>
      <Image src={logoLarge25Years} alt="Logo" height={34} />
      <div className={styles["search-box__container"]}>
        <input
          type="text"
          placeholder="Buscar productos, marcas y más..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles["search-box__input"]}
        />
        <button type="submit" className={styles["search-box__button"]}>
          <Image src={searchIcon} alt="Buscar" height={18} width={18} />
        </button>
      </div>
    </form>
  );
};
