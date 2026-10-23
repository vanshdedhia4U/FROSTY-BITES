import React from 'react';

export const OrderingProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Favourite',
      description:
        'Browse our celebration menu or share your desired custom design reference on WhatsApp.',
    },
    {
      num: '02',
      title: 'Coordinate on WhatsApp',
      description:
        'Tell us your event date, serving size, and flavour preference (+91 78880 49439).',
    },
    {
      num: '03',
      title: 'Fresh Handcrafted Delivery',
      description:
        'We bake fresh on your celebration day and deliver safely to your doorstep in Ambernath.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F8EFE6] border-t border-[#3D231A]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#79321A] font-semibold">
            Simple Ordering
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#3D231A] tracking-tight mt-1">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#7A5C50] mt-2">
            Every celebration cake is individually baked and coordinated with you directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.num}
              className="bg-[#FAF3EC] rounded-3xl p-7 border border-[#3D231A]/6 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-normal text-[#79321A] block mb-3">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#3D231A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7A5C50] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
