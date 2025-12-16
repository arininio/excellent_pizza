export interface SeafoodItem {
  name: string;
  description?: string;
  details?: string;
  marketPrice?: boolean;
}

export const seafood: SeafoodItem[] = [
  { name: "Fish Grinder", marketPrice: true },
  { name: "Fish & Chips", marketPrice: true },
  { name: "Scallops", marketPrice: true },
  { name: "Clam Plate", marketPrice: true },
  {
    name: "Seafood Combo Platter",
    details: "fish, scallops, clams",
    marketPrice: true,
  },
];

