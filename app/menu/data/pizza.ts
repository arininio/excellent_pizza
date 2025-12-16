export interface PizzaPricing {
  toppings: string;
  small: string;
  large: string;
}

export const pizzaPricing: PizzaPricing[] = [
  { toppings: "Cheese", small: "$8.99", large: "$13.99" },
  { toppings: "1 Topping", small: "$9.99", large: "$14.99" },
  { toppings: "2 Toppings", small: "$10.99", large: "$15.99" },
  { toppings: "3 Toppings", small: "$11.99", large: "$16.99" },
  { toppings: "4 Toppings", small: "$12.99", large: "$17.99" },
];

export const additionalToppings = {
  small: "+$2.40",
  large: "+$3.40",
};

export const availableToppings = {
  meats: [
    "Pepperoni",
    "Hamburger",
    "Chicken",
    "Meatball",
    "Chourico",
    "Sausage",
    "Ham",
    "Bacon",
    "Salami",
    "Anchovies",
  ],
  vegetables: [
    "Mushroom",
    "Olive",
    "Onion",
    "Pepper",
    "Spinach",
    "Eggplant",
    "Pineapple",
    "Broccoli",
    "Roasted Pepper",
  ],
};

