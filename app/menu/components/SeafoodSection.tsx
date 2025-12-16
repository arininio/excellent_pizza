import { seafood } from "../data/seafood";

export default function SeafoodSection() {
  return (
    <div>
      <h4 className="font-heading text-xl md:text-2xl text-brand-navy mb-4">
        Seafood Dinners
      </h4>
      <div className="space-y-4 mb-8">
        {seafood.map((item, index) => (
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
                {item.marketPrice && (
                  <p className="font-body text-base text-brand-navy font-semibold mt-2">
                    Market Price
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Note */}
      <div className="mt-8 pt-6 border-t-2 border-brand-navy/20">
        <p className="font-body text-base text-brand-navy font-semibold mb-2">
          Pricing:
        </p>
        <p className="font-body text-base text-brand-navy">
          All seafood dinner items are Market Price (call for current pricing).
        </p>
      </div>
    </div>
  );
}

