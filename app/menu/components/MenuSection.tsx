import { type ReactNode } from "react";

interface MenuSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function MenuSection({ id, title, children }: MenuSectionProps) {
  return (
    <div id={id} className="scroll-mt-20">
      <h3 className="font-heading text-2xl md:text-3xl text-brand-navy mb-6 md:mb-8 leading-tight">
        {title}
      </h3>
      {children}
    </div>
  );
}

