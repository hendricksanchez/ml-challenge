import { IItemDetail } from "@/modules/item/domain/models";
import { IItemRepository } from "@/modules/item/domain/repositories";
import itemsData from "@/modules/item/infrastructure/data/items-MLA-iphones.json";
import { mapItemFromApi } from "@/modules/item/infrastructure/mappers";

export class ItemRepositoryLocalImpl implements IItemRepository {
  async getById(id: string): Promise<IItemDetail> {
    const itemDto = itemsData.results.find(
      (item) => item.id.toLowerCase() === id.toLowerCase()
    );

    if (!itemDto)
      return new Promise((_, reject) => {
        reject(new Error("Item not found"));
      });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          // category: mapItemCategoryFromApi(),
          // description: mapItemDescriptionFromApi(),
          item: mapItemFromApi(itemDto),
        });
      }, 500);
    });
  }
}
