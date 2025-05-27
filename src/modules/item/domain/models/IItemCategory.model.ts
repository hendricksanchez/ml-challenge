export interface IItemCategory {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: [
    {
      id: string;
      name: string;
    }
  ];
  date_created: string;
}
