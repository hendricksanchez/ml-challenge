export interface IItemAttributes {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string | null;
  values: {
    id: string | null;
    name: string | null;
    struct: { number: number; unit: string } | null;
  }[];
  value_type: string;
}
