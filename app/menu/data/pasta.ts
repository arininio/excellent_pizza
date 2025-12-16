export interface PastaItem {
  name: string;
  description?: string;
  details?: string;
  price: number;
}

export const pasta: PastaItem[] = [
  { name: "With Chourico", price: 10.99 },
  { name: "With Meat Sauce", price: 10.99 },
  { name: "With Meatballs", price: 10.99 },
  { name: "With Sausage", price: 10.99 },
  { name: "With Mushrooms", price: 10.99 },
  { name: "With Eggplant", price: 10.99 },
  { name: "With Veal", price: 10.99 },
  { name: "With Special", price: 10.99 },
  { name: "With Chicken Cutlet", price: 10.99 },
  { name: "Homemade Lasagna", price: 10.99 },
];

export const pastaAddOns = {
  extraMozzarella: 2.05,
};

