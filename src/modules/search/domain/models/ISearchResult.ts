import { IPaging } from "@/shared/domain/models";

export interface ISearchResult {
  items: ISearchItem[];
  paging: IPaging;
}

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

export interface ISearchItemPrice {
  currency: string;
  currencyId: string;
  amount: number;
  regularAmount: number;
  discountRate: number;
}

export interface ISearchItemInstallments {
  quantity: number;
  amount: number;
  rate: number;
  currencyId: string;
}
