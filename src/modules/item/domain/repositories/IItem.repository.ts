import { IItem } from "@/modules/item/domain/models";

export interface IItemRepository {
  getById: (id: string) => Promise<IItem>;
}
