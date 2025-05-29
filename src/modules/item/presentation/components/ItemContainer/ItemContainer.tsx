import styles from "./ItemContainer.module.scss";

interface IItemContainer {
  children: React.ReactNode | React.ReactNode[];
}

export const ItemContainer = ({ children }: IItemContainer) => {
  return <div className={styles["item-container"]}>{children}</div>;
};
