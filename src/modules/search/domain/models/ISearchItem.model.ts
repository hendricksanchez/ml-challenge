import { ISearchItemInstallments } from "./ISearchItemInstallments.model";
import { ISearchItemPrice } from "./ISearchItemPrice.model";

export interface ISearchItem {
  id: string;
  title: string;
  seller: string;
  price: ISearchItemPrice;
  installments: ISearchItemInstallments;
  freeShipping: boolean;
  condition: string;
  picture: string;
}
