/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IItemDtoResponse {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number | null;
  price: number;
  base_price: number;
  original_price: number | null;
  currency_id: string;
  initial_quantity: number;
  sale_terms: ISaleTermDtoResponse[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: IPictureDtoResponse[];
  video_id: string | null;
  descriptions: any[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: IShippingDtoResponse;
  international_delivery_mode: string;
  seller_address: ISellerAddressDtoResponse;
  seller_contact: string | null;
  location: object;
  coverage_areas: any[];
  attributes: IAttributeDtoResponse[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: string | null;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number | null;
  catalog_listing: boolean;
}

export interface ISaleTermDtoResponse {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  value_struct: { number: number; unit: string } | null;
  values: {
    id: string | null;
    name: string;
    struct: { number: number; unit: string } | null;
  }[];
  value_type: string;
}

export interface IPictureDtoResponse {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface IShippingDtoResponse {
  mode: string;
  methods: any[];
  tags: string[];
  dimensions: string | null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface ISellerAddressDtoResponse {
  city: { name: string };
  state: { id: string; name: string };
  country: { id: string; name: string };
  search_location: {
    neighborhood: { id: string; name: string };
    city: { id: string; name: string };
    state: { id: string; name: string };
  };
  id: number;
}

export interface IAttributeDtoResponse {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string | null;
  values: {
    id: string | null;
    name: string | null;
    struct: { number: number; unit: string } | null;
  }[];
  value_type: string;
}
