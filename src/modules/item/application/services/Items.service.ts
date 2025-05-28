import { IItemRepository } from "@/modules/item/domain/repositories";

export class ItemsService {
  constructor(private readonly repository: IItemRepository) {}

  async getItemDetailsById(id: string) {
    return this.repository.getById(id);
  }
}
