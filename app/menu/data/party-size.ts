export interface PartySizeItem {
  name: string;
  description?: string;
  details?: string;
}

export const partySizeMeals: PartySizeItem[] = [
  { name: "Greek Salad" },
  { name: "Antipasto" },
  { name: "Large Antipasto" },
  { name: "Pan of Meat & Cheese Lasagna" },
  { name: "Chicken Wing Platter" },
  { name: "Chicken Fingers (hot or mild)" },
  {
    name: "Spaghetti or Ziti Pan",
    details: "Available with: Chourico, Meat Sauce, Meatballs, Sausage, Mushrooms, Eggplant, Veal, Special, or Chicken Cutlet",
  },
];

