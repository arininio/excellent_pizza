interface PriceTableProps {
  headers: string[];
  rows: Array<{
    label: string;
    values: string[];
  }>;
}

export default function PriceTable({ headers, rows }: PriceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-brand-navy/20">
            <th className="text-left py-4 pr-6 font-body font-semibold text-brand-navy text-base">
              {headers[0]}
            </th>
            {headers.slice(1).map((header, index) => (
              <th
                key={index}
                className="text-right py-4 px-4 font-body font-semibold text-brand-navy text-base"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-body text-brand-navy">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-brand-navy/10">
              <td className="py-4 pr-6 text-base leading-relaxed">{row.label}</td>
              {row.values.map((value, valueIndex) => (
                <td
                  key={valueIndex}
                  className="text-right py-4 px-4 font-semibold text-base"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

