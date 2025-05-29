import { IItem } from "@/modules/item/domain/models";
import {
  ICategoryDtoResponse,
  IItemDescriptionDtoResponse,
  IItemDtoResponse,
} from "@/modules/item/infrastructure/dtos";
import { ISearchItemResponse } from "@/modules/search/infrastructure/dtos";
import { Currency, ItemCondition, mapItemCondition } from "@/shared/enums";

export const mapItemDetailsFromApi = (
  dto: IItemDtoResponse,
  dtoFromSearch: ISearchItemResponse,
  categoryDto: ICategoryDtoResponse,
  descriptionDto: IItemDescriptionDtoResponse
): IItem => {
  return {
    id: dto.id,
    siteId: dto.site_id,
    title: dto.title,
    seller: dtoFromSearch.seller.nickname,
    sellerId: dto.seller_id,
    categoryId: dto.category_id,
    categoryPathFromRoot: categoryDto.path_from_root,
    description: descriptionDto.plain_text,
    officialStoreId: dto.official_store_id,
    price: {
      currency:
        Currency[dtoFromSearch.currency_id as keyof typeof Currency].toString(),
      currencyId: dtoFromSearch.currency_id,
      amount: dtoFromSearch.price,
      regularAmount: dtoFromSearch.original_price || dtoFromSearch.price,
      discountRate:
        dtoFromSearch.sale_price?.metadata?.campaign_discount_percentage || 0,
    },
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
