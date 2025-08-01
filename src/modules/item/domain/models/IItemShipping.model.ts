export interface IItemShipping {
  mode: string;
  methods: string[];
  tags: string[];
  dimensions: string | null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}
