import type { NextApiRequest, NextApiResponse } from "next";
import { ItemsService } from "@/modules/item/application/services";
import { ItemRepositoryLocalImpl } from "@/modules/item/infrastructure/api";
import { NotFoundError } from "@/shared/errors";

const repository = new ItemRepositoryLocalImpl();
const itemsService = new ItemsService(repository);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid Id param" });
  }

  try {
    const result = await itemsService.getItemDetailsById(id);
    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
