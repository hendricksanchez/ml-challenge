import Image from "next/image";
import { IItem } from "@/modules/item/domain/models";
import { NumericHelper } from "@/shared/helpers";
import styles from "./ItemDetail.module.scss";

interface IItemDetail {
  item: IItem;
}

export const ItemDetail = ({ item }: IItemDetail) => {
  // const mainImage = item.pictures?.[0].url;
  return (
    <div className={styles["item-detail"]}>
      <div className={styles["item-detail__top"]}>
        <div className={styles["item-detail__left"]}>
          <div className={styles["item-detail__gallery"]}>
            {item.pictures.map((src, idx) => (
              <Image
                key={idx}
                src={item.pictures[idx].url}
                alt={`Imagen ${idx + 1}`}
                className={styles["item-detail__thumb"]}
                width={50}
                height={50}
              />
            ))}
          </div>
          <div className={styles["item-detail__image-wrapper"]}>
            <Image
              src={item.pictures[0].url}
              alt={item.title}
              className={styles["item-detail__image"]}
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className={styles["item-detail__right"]}>
          <span className={styles["item-detail__condition"]}>
            {item.condition} | {item.initialQuantity} vendidos
          </span>
          <h1 className={styles["item-detail__title"]}>{item.title}</h1>
          <span className={styles["item-detail__seller"]}>
            Por {item.seller}
          </span>
          <span className={styles["item-detail__price"]}>
            {`${item.price.currency} ${NumericHelper.formatNumber(
              item.price.regularAmount
            )}`}
          </span>

          {item.price && (
            <span className={styles["item-detail__installments"]}>
              Mismo precio en XXXX
            </span>
          )}

          {item.shipping.free_shipping && (
            <span className={styles["item-detail__shipping"]}>
              Envío gratis
            </span>
          )}

          {true && (
            <span className={styles["item-detail__attribute"]}>
              Color: <strong>{`Azul`}</strong>
            </span>
          )}
        </div>
      </div>

      <div className={styles["item-detail__description"]}>
        <h2 className={styles["item-detail__description-title"]}>
          Descripción
        </h2>
        <p className={styles["item-detail__description-text"]}>
          {item.description}
        </p>
      </div>
    </div>
    // <div className={styles["item-detail"]}>
    //   <div className={styles["item-detail__image-section"]}>
    //     {mainImage && (
    //       <div className={styles["item-detail__image"]}>
    //         <Image src={mainImage} alt={item.title} height={259} width={250} />
    //       </div>
    //     )}
    //     <div className={styles["item-detail__description"]}>
    //       <h2 className={styles["item-detail__description-title"]}>
    //         Descripción del producto
    //       </h2>
    //       <p className={styles["item-detail__description-text"]}>
    //         {item.description}
    //       </p>
    //     </div>
    //   </div>

    //   <div className={styles["item-detail__info-section"]}>
    //     <span className={styles["item-detail__condition"]}>
    //       {item.condition} · {item.initialQuantity} vendidos
    //     </span>
    //     <h1 className={styles["item-detail__title"]}>{item.title}</h1>
    //     <span className={styles["item-detail__price"]}>{`${
    //       item.price.currency
    //     } ${NumericHelper.formatNumber(item.price.amount)}`}</span>
    //   </div>
    // </div>
  );
};
