import { IItemDetail } from "@/modules/item/domain/models";

export interface IItemRepository {
  getById: (id: string) => Promise<IItemDetail>;
}
