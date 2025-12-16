import { specialtyPizzas } from "../data/specialty-pizza";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function SpecialtyPizzaSection() {
  return (
    <div className="space-y-6">
      {specialtyPizzas.map((pizza, index) => (
        <div key={index} className="border-b border-brand-navy/10 pb-6 last:border-b-0 last:pb-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div className="flex-1">
              <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                {pizza.name}
              </h4>
              {pizza.description && (
                <p className="font-body text-base text-brand-navy/70 mb-2 leading-relaxed">
                  {pizza.description}
                </p>
              )}
              {pizza.details && (
                <p className="font-body text-base text-brand-navy/80 leading-relaxed mt-2">
                  {pizza.details}
                </p>
              )}
            </div>
            <div className="flex gap-4 md:gap-6 font-body text-brand-navy font-semibold flex-shrink-0 md:mt-0 mt-2 text-base">
              {pizza.marketPrice ? (
                <span className="text-brand-navy">Market Price</span>
              ) : pizza.prices ? (
                <>
                  <span>Small {formatPrice(pizza.prices.small)}</span>
                  <span>Large {formatPrice(pizza.prices.large)}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

