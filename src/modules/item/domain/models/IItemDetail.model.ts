import { IItem } from "./IItem.model";
import { IItemCategory } from "./IItemCategory.model";
import { IItemDescription } from "./IItemDescription.model";

export interface IItemDetail {
  category: IItemCategory;
  description: IItemDescription;
  item: IItem;
}
