import { fetchFromMiddleware } from "@/shared/infrastructure/http";
import { IItem } from "@/modules/item/domain/models";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getItemDetailsByIdUseCase = async (id: string) => {
  try {
    return await fetchFromMiddleware<IItem>(
      `${baseUrl}/api/items/${encodeURIComponent(id)}`
    );
  } catch (error) {
    console.log("Error getItemDetailsById", error);
    throw Error;
  }
};
