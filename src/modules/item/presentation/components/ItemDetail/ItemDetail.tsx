import { useMemo, useState } from "react";
import Image from "next/image";
import { IItem } from "@/modules/item/domain/models";
import { NumericHelper } from "@/shared/helpers";
import styles from "./ItemDetail.module.scss";

interface IItemDetail {
  item: IItem;
}

export const ItemDetail = ({ item }: IItemDetail) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    item.pictures?.[0].url
  );

  const getMainColor = useMemo(() => {
    const attribute = item.attributes.find(
      (attribute) => attribute.id === "MAIN_COLOR"
    );
    return attribute?.value_name ?? "";
  }, [item.attributes]);

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
                className={`${styles["item-detail__thumb"]} ${
                  item.pictures[idx].url === selectedImage
                    ? styles["item-detail__thumb--selected"]
                    : ""
                }`}
                width={50}
                height={50}
                onClick={() => setSelectedImage(item.pictures[idx].url)}
              />
            ))}
          </div>
          <div className={styles["item-detail__image-wrapper"]}>
            <Image
              src={selectedImage}
              alt={item.title}
              className={styles["item-detail__image"]}
              width={300}
              height={500}
            />
          </div>
        </div>

        <div className={styles["item-detail__right"]}>
          <span className={styles["item-detail__condition"]}>
            {item.condition} | +{item.initialQuantity} vendidos
          </span>
          <div className={styles["item-detail__title-container"]}>
            <h1 className={styles["item-detail__title"]}>{item.title}</h1>
            <span className={styles["item-detail__seller"]}>
              Por {item.seller}
            </span>
          </div>

          <div className={styles["item-detail__price-container"]}>
            <span className={styles["item-detail__price"]}>
              {`${item.price.currency} ${NumericHelper.formatNumber(
                item.price.amount
              )}`}
            </span>
            {item.installments?.quantity > 0 && (
              <span className={styles["item-detail__installments"]}>
                {`Mismo precio en ${item.installments.quantity} cuotas de ${
                  item.price.currency
                } ${NumericHelper.formatNumber(item.installments.amount)}`}
              </span>
            )}
          </div>

          {item.shipping.free_shipping && (
            <span className={styles["item-detail__shipping"]}>
              Envío gratis
            </span>
          )}

          {getMainColor && (
            <div>
              <span className={styles["item-detail__attribute-key"]}>
                Color:
              </span>
              &nbsp;
              <span className={styles["item-detail__attribute-value"]}>
                {getMainColor}
              </span>
            </div>
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
  );
};
