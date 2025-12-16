import Image from "next/image";
import { Download } from "lucide-react";
import Section from "./ui/Section";
import Button from "./ui/Button";

interface MenuItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}

// Menu favorites
const menuItems: MenuItem[] = [
  {
    id: "1",
    image: "/party_pizza.png",
    alt: "Party Size Sheet Pizza",
    title: "Party Size Sheet Pizza",
    description: "Our signature square pizza. 24 slices of cheesy perfection. Perfect for game days and family gatherings.",
  },
  {
    id: "2",
    image: "/fish_n_chips.jpeg",
    alt: "Fish & Chips",
    title: "Fish & Chips",
    description: "Fresh, crispy haddock served with golden french fries and coleslaw. A Friday night tradition.",
  },
  {
    id: "3",
    image: "/steak_n_cheese.jpeg",
    alt: "Steak & Cheese Grinder",
    title: "Steak & Cheese Grinder",
    description: "Shaved steak, melted American cheese, and your choice of peppers and onions on a toasted roll.",
  },
  {
    id: "4",
    image: "/greek_pizza.jpeg",
    alt: "Greek Pizza Special",
    title: "Greek Pizza Special",
    description: "A house specialty. Spinach, olives, feta, and hot peppers.",
  },
];

export default function MenuImageGrid() {
  return (
    <Section id="menu" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-navy mb-4">
            Handcrafted Favorites
          </h2>
          <p className="font-body text-brand-navy/80 text-lg max-w-2xl mx-auto">
            All our offerings are made to order with the freshest ingredients
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-brand-navy/10 group cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Content Area */}
              <div className="p-5">
                <h3 className="font-heading text-base md:text-xl text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 line-clamp-2 hidden md:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12">
          <Button href="/menu" variant="primary">
            View Full Menu
          </Button>
          <div className="flex items-center gap-2 text-brand-navy/80 font-body">
            <span>or</span>
            <a
              href="/excellent-pizza-full-menu.pdf"
              download
              className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors font-medium underline"
            >
              <Download size={16} />
              <span>download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

