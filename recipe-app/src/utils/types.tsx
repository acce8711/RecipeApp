export interface UnitType {
  id: number;
  unit: string;
}

export interface IngredientType {
  id: string;
  unitID: number;
  measurement: string | null;
  ingredientName: string | null;
}
