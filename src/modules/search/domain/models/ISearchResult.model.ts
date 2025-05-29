import { IPaging } from "@/shared/domain/models";
import { ISearchItem } from "./ISearchItem.model";

export interface ISearchResult {
  items: ISearchItem[];
  paging: IPaging;
}
