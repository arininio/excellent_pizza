export interface GrinderItem {
  name: string;
  description?: string;
  details?: string;
  prices: {
    small: number;
    large: number;
  };
}

export const grinders: GrinderItem[] = [
  { name: "American", prices: { small: 8.0, large: 9.1 } },
  { name: "Salami", prices: { small: 8.0, large: 9.1 } },
  { name: "Meatball", prices: { small: 8.0, large: 9.1 } },
  { name: "Sausage", prices: { small: 8.0, large: 9.1 } },
  { name: "Ham", prices: { small: 8.0, large: 9.1 } },
  { name: "Genoa Salami", prices: { small: 8.0, large: 9.1 } },
  { name: "Pastrami", prices: { small: 8.0, large: 9.1 } },
  { name: "Roast Beef", prices: { small: 8.0, large: 9.1 } },
  { name: "Eggplant", prices: { small: 8.0, large: 9.1 } },
  { name: "Veal", prices: { small: 8.0, large: 9.1 } },
  { name: "Vegetarian", prices: { small: 8.0, large: 9.1 } },
  { name: "Hamburger", prices: { small: 8.0, large: 9.1 } },
  { name: "Cheeseburger", prices: { small: 8.0, large: 9.1 } },
  { name: "BLT", prices: { small: 8.0, large: 9.1 } },
  { name: "Turkey", prices: { small: 8.0, large: 9.1 } },
  { name: "Chicken Cutlet", prices: { small: 8.0, large: 9.1 } },
  { name: "Chicken Parmesan", prices: { small: 8.0, large: 9.1 } },
  { name: "Grilled Chicken", prices: { small: 8.0, large: 9.1 } },
  { name: "Chourico", prices: { small: 8.0, large: 9.1 } },
  { name: "Linguica", prices: { small: 8.0, large: 9.1 } },
  { name: "Tuna", prices: { small: 8.0, large: 9.25 } },
  { name: "Special Combo (Sausage & Meatball)", prices: { small: 8.0, large: 9.25 } },
  { name: "Chourico & Egg", prices: { small: 8.0, large: 9.25 } },
  { name: "Chourico & Chips", prices: { small: 8.0, large: 9.25 } },
  { name: "Seafood", prices: { small: 8.0, large: 9.25 } },
  { name: "Italian Special", prices: { small: 8.0, large: 9.25 } },
  { name: "Egg & Ham", prices: { small: 8.0, large: 9.25 } },
  { name: "Bacon & Egg", prices: { small: 8.0, large: 9.25 } },
  { name: "Sausage & Egg", prices: { small: 8.0, large: 9.25 } },
  { name: "Steak & Cheese", prices: { small: 8.0, large: 9.25 } },
  { name: "Steak & Peppers", prices: { small: 8.0, large: 9.25 } },
  { name: "Steak & Mushroom", prices: { small: 8.0, large: 9.25 } },
  { name: "Steak & Onion", prices: { small: 8.0, large: 9.5 } },
  {
    name: "Steak Special",
    details: "steak, onions, peppers, mushrooms, cheese",
    prices: { small: 8.0, large: 9.5 },
  },
];

export const grinderAddOns = {
  extraMeatOrCheese: 2.0,
};

