export interface IItemAttributes {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  values: [
    {
      id: string;
      name: string;
      struct: string;
    }
  ];
  value_type: string;
}
