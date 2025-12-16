import {
  classicSalads,
  proteinSalads,
  saladAddOns,
  saladDressings,
} from "../data/salads";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function SaladsSection() {
  return (
    <div>
      <p className="font-body text-base text-brand-navy/80 mb-4 -mt-4">
        Served with fresh Italian bread or Syrian pocket
      </p>

      {/* Classic Salads */}
      <div className="mb-8">
        <h4 className="font-heading text-xl md:text-2xl text-brand-navy mb-4">
          Classic Salads
        </h4>
        <div className="space-y-4">
          {classicSalads.map((salad, index) => (
            <div
              key={index}
              className="border-b border-brand-navy/10 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                    {salad.name}
                  </h4>
                  {salad.description && (
                    <p className="font-body text-base text-brand-navy/70 leading-relaxed">
                      {salad.description}
                    </p>
                  )}
                </div>
                <div className="font-body text-brand-navy font-semibold flex-shrink-0 text-lg">
                  {formatPrice(salad.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protein Salads */}
      <div className="mb-8">
        <h4 className="font-heading text-xl md:text-2xl text-brand-navy mb-4">
          Protein Salads
        </h4>
        <div className="space-y-4">
          {proteinSalads.map((salad, index) => (
            <div
              key={index}
              className="border-b border-brand-navy/10 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                    {salad.name}
                  </h4>
                  {salad.description && (
                    <p className="font-body text-base text-brand-navy/70 leading-relaxed">
                      {salad.description}
                    </p>
                  )}
                </div>
                <div className="font-body text-brand-navy font-semibold flex-shrink-0 text-lg">
                  {formatPrice(salad.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="mt-8 pt-6 border-t-2 border-brand-navy/20">
        <p className="font-body text-base text-brand-navy mb-2">
          Extra Dressings: +{formatPrice(saladAddOns.extraDressing)}
        </p>
        <p className="font-body text-sm text-brand-navy/80">
          {saladDressings.join(", ")}
        </p>
      </div>
    </div>
  );
}

