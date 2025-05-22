import Link from "next/link";
import Image from "next/image";
import { ISearchItem } from "@/modules/search/domain/models";
import styles from "./ItemCard.module.scss";

interface IItemCard {
  item: ISearchItem;
}

export const ItemCard = ({ item }: IItemCard) => {
  return (
    <Link href={`/items/${item.id}`} className={styles["item-card"]}>
      <div className={styles["item-card__image"]}>
        <Image src={item.picture} alt={item.title} height={259} width={250} />
      </div>
      <div className={styles["item-card__info"]}>
        <div className={styles["item-card__title-container"]}>
          <h2 className={styles["item-card__title"]}>{item.title}</h2>
          <h4
            className={styles["item-card__seller"]}
          >{`Por ${item.seller}`}</h4>
        </div>

        <div className={styles["item-card__price-container"]}>
          {item.price.discountRate > 0 && (
            <span className={styles["item-card__has-discount"]}>
              {item.price.regularAmount}
            </span>
          )}
          <div className={styles["item-card__price-discount-container"]}>
            <div className={styles["item-card__price"]}>
              <span>{item.price.amount}</span>
            </div>
            {item.price.discountRate > 0 && (
              <div className={styles["item-card__discount"]}>
                <span>{`${item.price.discountRate}% OFF`} </span>
              </div>
            )}
          </div>
          {item.installments.quantity > 0 && (
            <div className={styles["item-card__installments"]}>
              <span>
                {`Mismo precio en ${item.installments.quantity} cuotas de ${item.installments.amount}`}
              </span>
            </div>
          )}
        </div>
        {item.freeShipping && (
          <span className={styles["item-card__shipping"]}>Envío gratis</span>
        )}
        <span className={styles["item-card__condition"]}>{item.condition}</span>
      </div>
    </Link>
  );
};
