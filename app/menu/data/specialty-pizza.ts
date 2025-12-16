export interface SpecialtyPizzaItem {
  name: string;
  description?: string;
  details?: string; // What's on the pizza (ingredients/toppings)
  prices?: {
    small: number;
    large: number;
  };
  marketPrice?: boolean;
}

export const specialtyPizzas: SpecialtyPizzaItem[] = [
  {
    name: "Chicken or Buffalo Chicken",
    prices: { small: 10.5, large: 16.55 },
  },
  {
    name: "Greek Mediterranean",
    prices: { small: 15.0, large: 18.99 },
  },
  {
    name: "Vegetable Special",
    prices: { small: 14.49, large: 18.99 },
  },
  {
    name: "Meat Lover's Special",
    prices: { small: 14.49, large: 18.99 },
  },
  {
    name: "Clam/Shrimp, or Scallop Pizza",
    marketPrice: true,
  },
  {
    name: "Chourico & Chips",
    prices: { small: 11.99, large: 16.99 },
  },
  {
    name: "Excellent Special",
    prices: { small: 14.99, large: 18.99 },
  },
  {
    name: "Ham & Pineapple",
    prices: { small: 10.99, large: 15.99 },
  },
  {
    name: "Pizza Steak",
    prices: { small: 14.99, large: 22.99 },
  },
];

