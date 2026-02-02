import React from "react";

const UseCases = () => {
  const cards = Array(6).fill({
    category: "Manufacturing",
    title: "Accelerating RFQ Processes for a Leading Metals Manufacturer",
    date: "Jul 28, 2025",
  });

  return (
    <section className="bg-[#e9e7e4] py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-[32px] md:text-[40px] font-medium text-black mb-10 md:mb-14">
          Explore Use-Cases Insights
        </h2>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {cards.map((item, index) => (
              <div
                key={index}
                className="snap-center min-w-[280px] bg-white rounded-[28px] p-6 flex flex-col justify-between min-h-[260px]"
              >
                {/* Top */}
                <div>
                  <p className="text-sm text-gray-500 mb-4">
                    {item.category}
                  </p>

                  <div className="h-px w-full bg-gray-200 mb-6" />

                  <h3 className="text-base font-medium text-black leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="bg-[#f2f2f2] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    Read story <span>↗</span>
                  </button>

                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID (UNCHANGED) ================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 flex flex-col justify-between min-h-[260px]"
            >
              {/* Top */}
              <div>
                <p className="text-sm text-gray-500 mb-4">
                  {item.category}
                </p>

                <div className="h-px w-full bg-gray-200 mb-6" />

                <h3 className="text-lg font-medium text-black leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between">
                <button className="bg-[#f2f2f2] text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#e6e6e6] transition">
                  Read story <span>↗</span>
                </button>

                <p className="text-sm text-gray-400">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;
