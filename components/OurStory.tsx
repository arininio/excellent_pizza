import Image from "next/image";

export default function OurStory() {
  return (
    <section id="about" className="w-full bg-[#2d2926] text-[#a9a3a0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 order-1">
            {/* Small Label */}
            <p className="text-sm tracking-widest font-body font-bold text-[#e8a84a] uppercase">
              OUR STORY
            </p>

            {/* Headline */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-white">
              A Family Tradition Since 1962
            </h2>

            {/* Body Text */}
            <div className="space-y-4">
              <p className="font-body text-lg leading-relaxed text-[#FDFBF7]/90">
                For almost over a century now, Excellent Pizza has been the go-to spot for
                families in Somerset and the surrounding South Coast. It all
                started with a simple belief: great food brings great people together.
              </p>
              <p className="font-body text-lg leading-relaxed text-[#FDFBF7]/90">
                We're not a big chain, but we can compete with the best of them. We take pride in
                our hand-tossed dough made fresh daily, our slow-simmered sauce,
                and our commitment to using only the highest quality
                ingredients. From our family to yours, we're here to serve you the best pizza in town.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-4">
              <div className="flex flex-col">
                <span className="font-heading text-3xl text-[#e8a84a]">47+</span>
                <span className="font-body text-lg leading-relaxed text-[#FDFBF7]/90 mt-1">
                  Years Serving Somerset
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl text-[#e8a84a]">
                  100K+
                </span>
                <span className="font-body text-lg leading-relaxed text-[#FDFBF7]/90 mt-1">
                  Happy Customers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-3xl text-[#e8a84a]">1</span>
                <span className="font-body text-lg leading-relaxed text-[#FDFBF7]/90 mt-1">
                  Family Recipe
                </span>
              </div>
            </div>
          </div>

          {/* Image - Below text on mobile, right column on desktop */}
          <div className="order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/frank_family.png"
                alt="Excellent Pizza family tradition"
                width={600}
                height={800}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

