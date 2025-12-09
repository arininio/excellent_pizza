export function FindUsSection() {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const dayIndex = today === 0 ? 6 : today - 1; // Convert to Monday = 0, Sunday = 6
  
  const hoursDisplay = [
    { label: "Mon - Thurs:", time: "10:30 AM – 9:00 PM", days: [0, 1, 2, 3] }, // Mon-Thu
    { label: "Friday:", time: "10:30 AM – 10:00 PM", days: [4] }, // Fri
    { label: "Saturday:", time: "11:00 AM – 10:00 PM", days: [5] }, // Sat
    { label: "Sunday:", time: "11:30 AM – 9:00 PM", days: [6] }, // Sun
  ];

  const isCurrentDay = (days: number[]) => days.includes(dayIndex);

  return (
    <section
      id="hours-location"
      className="bg-brand-cream py-16 lg:py-24"
      aria-labelledby="find-us-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red">
            Visit Us
          </p>
          <h2
            id="find-us-heading"
            className="mt-3 text-3xl sm:text-4xl font-heading font-bold tracking-tight text-brand-navy"
          >
            Find Us Here
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Left Card */}
          <div className="bg-white rounded-3xl shadow-lg shadow-black/5 border border-black/5 p-6 sm:p-8">
            <div className="space-y-6">
              {/* Our Location */}
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="h-11 w-11 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold text-brand-navy">
                    Our Location
                  </p>
                  <div className="text-sm text-gray-600">
                    <p>1072 West County St</p>
                    <p>Somerset, MA</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=1072+West+County+St+Somerset+MA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-brand-red hover:text-[#b84535] mt-1"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-6">
                {/* Call Us */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-semibold text-brand-navy">
                      Call Us
                    </p>
                    <a
                      href="tel:5086726619"
                      className="text-xl font-bold text-brand-red hover:text-[#b84535]"
                    >
                      (508) 672-6619
                    </a>
                    <p className="text-sm text-gray-600">
                      Pickup & Delivery Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-6">
                {/* Hours */}
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="h-11 w-11 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-base font-semibold text-brand-navy">
                      Hours
                    </p>
                    <div className="text-sm font-semibold text-gray-900 space-y-1">
                      {hoursDisplay.map((item, index) => {
                        const isToday = isCurrentDay(item.days);
                        return (
                          <p
                            key={index}
                            className={`grid grid-cols-[100px_1fr] gap-4 ${
                              isToday ? "text-brand-red" : ""
                            }`}
                          >
                            <span className="text-right">{item.label}</span>
                            <span className="text-left">{item.time}</span>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 h-full min-h-[400px] lg:min-h-0">
            <iframe
              src="https://www.google.com/maps?q=1072+West+County+Street+Somerset+MA&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing our location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

