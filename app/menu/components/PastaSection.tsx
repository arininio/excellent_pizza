import { pasta, pastaAddOns } from "../data/pasta";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function PastaSection() {
  return (
    <div>
      <div className="mb-6">
        <h4 className="font-heading text-xl md:text-2xl text-brand-navy mb-2">
          Ziti & Spaghetti Dinners
        </h4>
        <p className="font-body text-base text-brand-navy/80 mb-4">
          (Choice of Spaghetti or Ziti)
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {pasta.map((item, index) => (
          <div
            key={index}
            className="border-b border-brand-navy/10 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="font-body text-base text-brand-navy/70 mb-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.details && (
                  <p className="font-body text-base text-brand-navy/80 leading-relaxed mt-1">
                    {item.details}
                  </p>
                )}
              </div>
              <div className="font-body text-brand-navy font-semibold flex-shrink-0 text-lg">
                {formatPrice(item.price)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add-Ons Section */}
      <div className="mt-8 pt-6 border-t-2 border-brand-navy/20">
        <p className="font-body text-base text-brand-navy">
          Extra Mozzarella Cheese: +{formatPrice(pastaAddOns.extraMozzarella)}
        </p>
      </div>
    </div>
  );
}

