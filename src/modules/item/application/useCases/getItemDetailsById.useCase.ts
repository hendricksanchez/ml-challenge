import { fetchFromMiddleware } from "@/shared/infrastructure/http";
import { IItemDetail } from "@/modules/item/domain/models";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getItemDetailsByIdUseCase = async (id: string) => {
  try {
    return await fetchFromMiddleware<IItemDetail>(
      `${baseUrl}/api/items/${encodeURIComponent(id)}`
    );
  } catch (error) {
    console.log("Error fetching item details", error);
  }
};
