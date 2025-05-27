import { IItemAttributes } from "./IItemAttributes.model";
import { IItemPicture } from "./IItemPicture.model";
import { IItemShipping } from "./IItemShipping.model";

export interface IItem {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: IItemPicture[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: string[];
  shipping: IItemShipping;
  attributes: IItemAttributes[];
  status: string;
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: string;
  date_created: string;
  last_updated: string;
  catalog_listing: true;
}
