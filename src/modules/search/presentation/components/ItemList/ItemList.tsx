import { ISearchItem } from "@/modules/search/domain/models";
import { ItemCard } from "@/modules/search/presentation/components/ItemCard";
import styles from "./ItemList.module.scss";

interface IItemListProps {
  items: ISearchItem[] | undefined;
}

export const ItemList = ({ items }: IItemListProps) => {
  return (
    <section className={styles["item-list-view"]}>
      {items?.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      {/* <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      /> */}
    </section>
  );
};
