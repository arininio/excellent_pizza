import { partySizeMeals } from "../data/party-size";

export default function PartySizeSection() {
  return (
    <div>
      <p className="font-body text-base text-brand-navy/80 mb-6">
        Perfect for groups, events, and "we invited more people than planned" situations
      </p>

      <div className="space-y-4 mb-8">
        {partySizeMeals.map((item, index) => (
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
                <p className="font-body text-base text-brand-navy font-semibold mt-2">
                  Call for pricing
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-8 pt-6 border-t-2 border-brand-navy/20">
        <p className="font-body text-base text-brand-navy">
          Party-size items are made to order
        </p>
      </div>
    </div>
  );
}

