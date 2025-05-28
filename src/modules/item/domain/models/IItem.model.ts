import { IItemAttributes } from "./IItemAttributes.model";
import { IItemPicture } from "./IItemPicture.model";
import { IItemShipping } from "./IItemShipping.model";

export interface IItem {
  id: string;
  siteId: string;
  title: string;
  sellerId: number;
  categoryId: string;
  officialStoreId: number | null;
  price: number;
  basePrice: number;
  originalPrice: number | null;
  currency: string;
  currencyId: string;
  initialQuantity: number;
  condition: string;
  permalink: string;
  thumbnailId: string;
  thumbnail: string;
  pictures: IItemPicture[];
  acceptsMercadopago: boolean;
  nonMercadoPagoPaymentMethods: string[];
  shipping: IItemShipping;
  attributes: IItemAttributes[];
  status: string;
  warranty: string;
  catalogProductId: string;
  domainId: string;
  parentItemId: string | null;
  dateCreated: string;
  lastUpdated: string;
  catalogListing: boolean;
}
