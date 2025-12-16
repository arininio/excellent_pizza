import { sides } from "../data/sides";

function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export default function SidesSection() {
  return (
    <div className="space-y-4">
      {sides.map((side, index) => (
        <div
          key={index}
          className="border-b border-brand-navy/10 pb-4 last:border-b-0 last:pb-0"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1">
              <h4 className="font-heading text-lg md:text-xl text-brand-navy mb-1">
                {side.name}
              </h4>
              {side.description && (
                <p className="font-body text-base text-brand-navy/70 leading-relaxed">
                  {side.description}
                </p>
              )}
            </div>
            <div className="font-body text-brand-navy font-semibold flex-shrink-0 text-lg">
              {formatPrice(side.price)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

