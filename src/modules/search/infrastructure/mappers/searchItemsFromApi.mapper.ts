import { ISearchResult } from "@/modules/search/domain/models";
import { ISearchItemsDtoResponse } from "@/modules/search/infrastructure/dtos";
import { Currency } from "@/shared/enums";

export const mapSearchItemsFromApi = (
  dto: ISearchItemsDtoResponse
): ISearchResult => {
  return {
    items: dto.items.map((item) => ({
      id: item.id,
      title: item.title,
      seller: item.seller.nickname,
      price: {
        currency:
          Currency[item.currency_id as keyof typeof Currency].toString(),
        currencyId: item.currency_id,
        amount: item.price,
        regularAmount: item.original_price || item.price,
        discountRate:
          item.sale_price?.metadata?.campaign_discount_percentage || 0,
      },
      installments: {
        quantity: item.installments.quantity,
        amount: item.installments.amount,
        rate: item.installments.rate,
        currencyId: item.installments.currency_id,
      },
      freeShipping: item.shipping?.free_shipping || false,
      condition: item.condition,
      picture: item.thumbnail,
    })),
    paging: {
      total: dto.paging.total,
      offset: dto.paging.offset,
      limit: dto.paging.limit,
    },
  };
};
