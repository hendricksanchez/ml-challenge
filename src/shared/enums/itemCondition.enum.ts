export enum ItemCondition {
  new = "new",
  used = "used",
  refurbished = "refurbished",
}

export const mapItemCondition = {
  [ItemCondition.new]: "Nuevo",
  [ItemCondition.used]: "Usado",
  [ItemCondition.refurbished]: "Reacondicionado",
};
