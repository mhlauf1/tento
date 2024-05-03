import React from "react";
import SectionHeader from "./SectionHeader";
import { valuesData } from "@/lib/data";

const ValueItem = ({ value }: any) => (
  <div
    className={`${value.color} p-12 flex flex-col h-[400px] justify-between`}
  >
    <h3 className="text-3xl text-neutral-400">{value.title}</h3>
    <p className="text-md text-neutral-500">{value.text}</p>
  </div>
);

const Values = () => {
  return (
    <section className="">
      <SectionHeader text="Our values" />
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <ValueItem value={valuesData[0]} />
        <ValueItem value={valuesData[1]} />
        <ValueItem value={valuesData[2]} />
        <div className="bg-white md:p-12 flex flex-col lg:h-[400px] justify-between"></div>
        <div className="bg-white md:p-12 flex flex-col lg:h-[400px] justify-between"></div>
        <ValueItem value={valuesData[3]} />
        <ValueItem value={valuesData[4]} />
        <ValueItem value={valuesData[5]} />
      </div>
      <div className="mt-32 lg:ml-[400px]">
        <h2 className="lg:w-4/5">
          Delivering Unparalleled Digital Experiences on Every Platform: That's
          Our Promise at Innovate Design.
        </h2>
        <div className="flex flex-col lg:flex-row mt-12 gap-16">
          <p className="text-neutral-500 p-height font-light lg:w-[42ch]">
            At Innovate Design, we're committed to delivering unparalleled
            digital experiences on every platform. In our digital-first world, a
            robust online presence is essential for connecting with your
            audience effectively. We prioritize creating seamless, engaging
            digital interactions that make a memorable impact.
          </p>
          <p className="text-neutral-500 p-height  lg:w-[42ch]">
            Our expert team of designers, developers, and digital strategists
            works closely together to develop bespoke digital solutions that
            address the unique needs of your business. From crafting intuitive
            websites to developing dynamic mobile apps and enhancing e-commerce
            platforms, we're dedicated to exceeding your expectations with every
            project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
