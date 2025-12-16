"use client";

import Section from "@/components/ui/Section";
import { Download } from "lucide-react";
import MenuSection from "./components/MenuSection";
import PizzaSection from "./components/PizzaSection";
import SpecialtyPizzaSection from "./components/SpecialtyPizzaSection";
import GrindersSection from "./components/GrindersSection";
import PastaSection from "./components/PastaSection";
import SaladsSection from "./components/SaladsSection";
import SidesSection from "./components/SidesSection";
import SeafoodSection from "./components/SeafoodSection";
import PartySizeSection from "./components/PartySizeSection";

const menuSections = [
  { id: "pizza", label: "Pizza" },
  { id: "specialty-pizza", label: "Specialty Pizza" },
  { id: "grinders-wraps", label: "Grinders & Wraps" },
  { id: "pasta", label: "Pasta Dinners" },
  { id: "salads", label: "Salads" },
  { id: "sides", label: "Side Orders" },
  { id: "seafood", label: "Seafood" },
  { id: "party-size", label: "Party Size Meals" },
];

export default function MenuPage() {
  return (
    <>
      {/* Menu TOC */}
      <Section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy mb-2">
            Menu
          </h2>
          <p className="text-base text-brand-navy/70 font-body mb-2 leading-relaxed">
            Scroll to see full menu or tap a section to jump down
          </p>
          <p className="text-base text-brand-navy/70 font-body mb-10 leading-relaxed">
            or{" "}
            <a
              href="/excellent-pizza-full-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-navy hover:text-brand-red transition-colors underline font-normal"
            >
              <Download size={14} />
              Download PDF
            </a>
          </p>

          <nav className="space-y-2">
            {menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-lg font-body font-bold text-brand-navy hover:text-brand-red transition-colors py-3 px-2 min-h-[44px] flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(`#${section.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </Section>

      {/* Menu Content Sections */}
      <Section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
          {/* Pizza Section */}
          <MenuSection id="pizza" title="Pizza">
            <PizzaSection />
          </MenuSection>

          {/* Specialty Pizza Section */}
          <MenuSection id="specialty-pizza" title="Specialty Pizza">
            <SpecialtyPizzaSection />
          </MenuSection>

          {/* Grinders & Wraps Section */}
          <MenuSection id="grinders-wraps" title="Grinders & Wraps">
            <GrindersSection />
          </MenuSection>

          {/* Pasta Dinners Section */}
          <MenuSection id="pasta" title="Pasta Dinners">
            <PastaSection />
          </MenuSection>

          {/* Salads Section */}
          <MenuSection id="salads" title="Salads">
            <SaladsSection />
          </MenuSection>

          {/* Side Orders Section */}
          <MenuSection id="sides" title="Side Orders">
            <SidesSection />
          </MenuSection>

          {/* Seafood Section */}
          <MenuSection id="seafood" title="Seafood">
            <SeafoodSection />
          </MenuSection>

          {/* Party Size Meals Section */}
          <MenuSection id="party-size" title="Party Size Meals">
            <PartySizeSection />
          </MenuSection>
        </div>
      </Section>
    </>
  );
}

