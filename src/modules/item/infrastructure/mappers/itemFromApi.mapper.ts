import { IItem } from "@/modules/item/domain/models";
import { IItemDtoResponse } from "@/modules/item/infrastructure/dtos";
import { Currency, ItemCondition, mapItemCondition } from "@/shared/enums";

export const mapItemFromApi = (dto: IItemDtoResponse): IItem => {
  return {
    id: dto.id,
    siteId: dto.site_id,
    title: dto.title,
    sellerId: dto.seller_id,
    categoryId: dto.category_id,
    officialStoreId: dto.official_store_id,
    price: dto.price,
    basePrice: dto.base_price,
    originalPrice: dto.original_price,
    currency: Currency[dto.currency_id as keyof typeof Currency].toString(),
    currencyId: dto.currency_id,
    initialQuantity: dto.initial_quantity,
    condition:
      mapItemCondition[
        dto.condition.toLowerCase() as keyof typeof ItemCondition
      ],
    permalink: dto.permalink,
    thumbnailId: dto.thumbnail_id,
    thumbnail: dto.thumbnail,
    pictures: dto.pictures,
    acceptsMercadopago: dto.accepts_mercadopago,
    nonMercadoPagoPaymentMethods: dto.non_mercado_pago_payment_methods,
    shipping: dto.shipping,
    attributes: dto.attributes,
    status: dto.status,
    warranty: dto.warranty,
    catalogProductId: dto.catalog_product_id,
    domainId: dto.domain_id,
    parentItemId: dto.parent_item_id,
    dateCreated: dto.date_created,
    lastUpdated: dto.last_updated,
    catalogListing: dto.catalog_listing,
  };
};
