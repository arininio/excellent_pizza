import PriceTable from "./PriceTable";
import {
  pizzaPricing,
  additionalToppings,
  availableToppings,
} from "../data/pizza";

export default function PizzaSection() {
  const tableRows = pizzaPricing.map((item) => ({
    label: item.toppings,
    values: [item.small, item.large],
  }));

  return (
    <div className="mb-12">
      <h4 className="font-heading text-xl md:text-2xl text-brand-navy mb-3">
        Build Your Own Pizza
      </h4>
      <p className="font-body text-base text-brand-navy/80 mb-6">
        Cheese pizza or choose up to 4 toppings
      </p>

      {/* Sizes */}
      <div className="mb-8">
        <p className="font-body font-semibold text-brand-navy mb-3">Sizes</p>
        <div className="flex gap-6 font-body text-brand-navy">
          <span>Small (12")</span>
          <span>Large (16")</span>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="mb-8">
        <p className="font-body font-semibold text-brand-navy mb-4">Pricing</p>
        <PriceTable
          headers={["Toppings", "Small", "Large"]}
          rows={tableRows}
        />
      </div>

      {/* Additional Toppings */}
      <div className="mb-8">
        <p className="font-body font-semibold text-brand-navy mb-2">
          Additional Toppings
        </p>
        <p className="font-body text-base text-brand-navy/80">
          Small {additionalToppings.small} · Large {additionalToppings.large}
        </p>
      </div>

      {/* Available Toppings */}
      <div>
        <p className="font-body font-semibold text-brand-navy mb-3">
          Available Toppings
        </p>
        <div className="space-y-4">
          <div>
            <p className="font-body font-semibold text-brand-navy mb-2">Meats</p>
            <p className="font-body text-base text-brand-navy/80 leading-relaxed">
              {availableToppings.meats.join(", ")}
            </p>
          </div>
          <div>
            <p className="font-body font-semibold text-brand-navy mb-2">
              Vegetables
            </p>
            <p className="font-body text-base text-brand-navy/80 leading-relaxed">
              {availableToppings.vegetables.join(", ")}
            </p>
          </div>
        </div>
        <p className="font-body text-sm text-brand-navy/70 mt-4 italic">
          (All toppings listed are available on any pizza)
        </p>
      </div>
    </div>
  );
}

