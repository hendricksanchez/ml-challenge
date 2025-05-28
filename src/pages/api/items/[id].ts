import type { NextApiRequest, NextApiResponse } from "next";
import { ItemsService } from "@/modules/item/application/services";
import { ItemRepositoryLocalImpl } from "@/modules/item/infrastructure/api";

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

  const result = await itemsService.getItemDetailsById(id);
  return res.status(200).json(result);
}
