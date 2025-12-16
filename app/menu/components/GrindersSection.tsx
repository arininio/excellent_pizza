import { grinders, grinderAddOns } from "../data/grinders";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function GrindersSection() {
  return (
    <div>
      <div className="space-y-4 mb-8">
        {grinders.map((grinder, index) => (
          <div
            key={index}
            className="border-b border-brand-navy/10 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                  {grinder.name}
                </h4>
                {grinder.description && (
                  <p className="font-body text-base text-brand-navy/70 mb-2 leading-relaxed">
                    {grinder.description}
                  </p>
                )}
                {grinder.details && (
                  <p className="font-body text-base text-brand-navy/80 leading-relaxed mt-1">
                    {grinder.details}
                  </p>
                )}
              </div>
              <div className="flex gap-4 md:gap-6 font-body text-brand-navy font-semibold flex-shrink-0 text-base">
                <span>Small {formatPrice(grinder.prices.small)}</span>
                <span>Large {formatPrice(grinder.prices.large)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add-Ons Section */}
      <div className="mt-8 pt-6 border-t-2 border-brand-navy/20">
        <p className="font-body text-base text-brand-navy mb-2">
          Extra Meat or Cheese: +{formatPrice(grinderAddOns.extraMeatOrCheese)}
        </p>
        <p className="font-body text-base text-brand-navy">
          Can be made into white or whole wheat wraps
        </p>
      </div>
    </div>
  );
}

