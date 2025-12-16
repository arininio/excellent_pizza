export interface SaladItem {
  name: string;
  description?: string;
  price: number;
}

export const classicSalads: SaladItem[] = [
  { name: "Tossed Garden", price: 7.05 },
  { name: "Greek", price: 8.1 },
  { name: "Antipasto", price: 10.0 },
  { name: "Chef", price: 10.0 },
  { name: "Chicken Caesar", price: 10.0 },
];

export const proteinSalads: SaladItem[] = [
  { name: "Grilled Chicken / Willow", price: 10.25 },
  { name: "Seafood", price: 10.25 },
  { name: "Tuna", price: 10.25 },
];

export const saladAddOns = {
  extraDressing: 1.99,
};

export const saladDressings = [
  "Italian",
  "Greek",
  "Blue Cheese",
  "French",
  "Italian Low-Cal",
  "Balsamic",
  "Oil & Vinegar",
  "Ranch",
];

