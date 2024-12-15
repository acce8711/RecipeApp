export interface UnitType {
  id: string;
  unit: string;
}

export interface IngredientType {
  id: string;
  unitID: string;
  measurement: string;
  ingredientName: string;
}
