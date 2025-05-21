import { IPagingResponse } from "@/shared/infrastructure/dtos";

export interface ISearchItemsDtoResponse {
  items: ISearchItemResponse[];
  paging: IPagingResponse;
}

export interface ISearchItemResponse {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number;
  sale_price: {
    price_id: string;
    amount: number;
    conditions: {
      eligible: boolean;
      context_restrictions: string[];
      start_time: string;
      end_time: string;
    };
    currency_id: string;
    exchange_rate: number | null;
    payment_method_prices: string[];
    payment_method_type: string;
    regular_amount: number;
    type: string;
    metadata: {
      funding_mode: string;
      promotion_offer_type: string;
      order_item_price: number;
      campaign_end_date: string;
      variation: string;
      campaign_id: string;
      discount_meli_amount: number;
      promotion_id: string;
      campaign_discount_percentage: number;
      experiment_id: string;
      promotion_type: string;
    };
  };
  available_quantity: string;
  official_store_id: string;
  official_store_name: string;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: string | null;
    promise: string | null;
    shipping_score: number;
  };
  stop_time: string;
  seller: { id: number; nickname: string };
  address: {
    state_id: string;
    state_name: string;
    city_id: number | null;
    city_name: string;
  };
  installments: {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
    metadata: {
      meliplus_installments: boolean;
      additional_bank_interest: boolean;
    };
  };
}
