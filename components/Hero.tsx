import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "./ui/Button";
import Section from "./ui/Section";
import HoursCard from "./HoursCard";

export default function Hero() {
  return (
    <Section id="hero" className="py-12 md:py-20">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-brand-navy leading-tight">
            Serving Up Excellence in Every Slice
          </h1>
          <p className="text-lg md:text-xl text-brand-navy/80 font-body">
            Feeding Somerset Families Since 1978
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Button
              href="tel:5086726619"
              variant="primary"
              icon={Phone}
            >
              Call for pickup or delivery
            </Button>
            <Button
              href="/menu"
              variant="outline"
            >
              View Menu
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="relative rounded-2xl overflow-visible shadow-lg">
            <Image
              src="/storefront.png"
              alt="Excellent Pizza storefront in Somerset, MA"
              width={800}
              height={600}
              priority={true}
              className="w-full h-auto object-cover rounded-2xl"
            />
            <HoursCard />
          </div>
        </div>
      </div>
    </Section>
  );
}

