import { IItem } from "@/modules/item/domain/models";
import { IItemRepository } from "@/modules/item/domain/repositories";
import { mapItemDetailsFromApi } from "@/modules/item/infrastructure/mappers";
import { ISearchItemResponse } from "@/modules/search/infrastructure/dtos";
import {
  ICategoryDtoResponse,
  IItemDescriptionDtoResponse,
} from "@/modules/item/infrastructure/dtos";
import itemsData from "@/shared/infrastructure/data/items-MLA-iphones.json";
import searchData from "@/shared/infrastructure/data/search-MLA-iphone.json";
import descriptionsData from "@/shared/infrastructure/data/descriptions-MLA-iphones.json";
import categoriesData from "@/shared/infrastructure/data/categories-MLA-iphones.json";

export class ItemRepositoryLocalImpl implements IItemRepository {
  async getById(id: string): Promise<IItem> {
    const itemDto = itemsData.results.find(
      (item) => item.id.toLowerCase() === id.toLowerCase()
    );
    if (!itemDto) throw new Error("Item not found");
    const itemFromSearch = searchData.results.find((item) => item.id === id);
    const categoryDto = categoriesData.results.find(
      (category) =>
        category.id.toLowerCase() === itemDto?.category_id.toLowerCase()
    );
    const descriptionDto = descriptionsData.results.find(
      (item) => item.id === id
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          mapItemDetailsFromApi(
            itemDto,
            itemFromSearch as unknown as ISearchItemResponse,
            categoryDto as ICategoryDtoResponse,
            descriptionDto as IItemDescriptionDtoResponse
          )
        );
      }, 500);
    });
  }
}
