import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <section className="bg-green-50 p-12 lg:p-24">
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="flex mb-4 lg:mb-0 lg:w-[25%]">
          <span className=" text-neutral-500 uppercase">Contact</span>
        </div>
        <div className="flex items-start flex-col lg:w-[75%]">
          <h2 className="lg:w-[80%]">
            Let&apos;s begin crafting your brand&apos;s unique narrative
            together.
          </h2>
          <p className=" text-gray-500 mt-6 mb-10 lg:w-[44ch]">
            Curious about the impact of a robust brand? Schedule a consultation
            with us today.
          </p>
          <button className="bg-neutral-800 text-gray-100 px-10 py-4 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
