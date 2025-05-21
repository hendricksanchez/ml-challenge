import type { NextApiRequest, NextApiResponse } from "next";
import { SearchItemsService } from "@/modules/search/application/services/SearchItems.service";
import { SearchRepositoryLocalImpl } from "@/modules/search/infrastructure/api";

const repo = new SearchRepositoryLocalImpl();
const searchItemsService = new SearchItemsService(repo);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q, offset } = req.query;

  if (typeof q !== "string") {
    return res.status(400).json({ error: "Invalid query param" });
  }

  const result = await searchItemsService.searchItemsByQuery(
    q,
    Number(offset) || 0
  );
  return res.status(200).json(result);
}
