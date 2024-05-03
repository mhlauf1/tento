import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

type Props = {};

const employees = [
  {
    name: "Clare Manion",
    src: "/person-1.png",
    position: "Founder",
  },
  {
    name: "Mike Lauf",
    src: "/person-2.png",
    position: "Co-Founded",
  },
  {
    name: "Drew Bergwall",
    src: "/person-3.png",
    position: "President",
  },
];
const Employee = ({ src, name, position }: any) => (
  <div>
    <div className="h-auto w-auto">
      <Image
        src={src}
        alt={name}
        layout="responsive"
        width={100}
        height={100}
        objectFit="cover"
      />
    </div>
    <div className="flex justify-between items-start mt-4">
      <h4 className="text-lg font-extralight text-neutral-700">{name}</h4>
      <span
        style={{ letterSpacing: ".5px" }}
        className="border border-neutral-500 text-sm font-extralight text-neutral-700 py-1 px-4 rounded-full"
      >
        {position}
      </span>
    </div>
  </div>
);

const Team = (props: Props) => {
  return (
    <section className="py-48">
      <SectionHeader text="Our Team" />
      <div className="mt-8 mb-16 flex items-center justify-between">
        <h2 className="max-w-[50vw]">Meet Our Team of Digital Experts</h2>
        <button className="border text-neutral-600 px-6 py-2 rounded-full">
          About Us
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex mb-12 md:mb-0 lg:pt-16 lg:px-4 flex-col items-start justify-between ">
          <div className="flex flex-col gap-4">
            <span className="uppercase">Join the Team</span>
            <h3 className="text-3xl">
              Ready to reshape the future of branding?
            </h3>
            <p className="text-neutral-500 mb-8 font-extralight">
              Join us and set new standards in the branding industry today!
            </p>
          </div>
          <button className="bg-neutral-800 text-white py-4 rounded-full px-8">
            Apply Now
          </button>
        </div>
        {employees.map((employee) => (
          <Employee
            src={employee.src}
            name={employee.name}
            position={employee.position}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-32">
        <div className="col-span-1">
          {/* First column intentionally left empty */}
        </div>
        <div className="cols-span-1 flex justify-between items-start">
          <Image src="logo-5.svg" alt="Logo" width={150} height={150} />
        </div>
        <div className="col-span-2 border-b pb-16">
          <h3 className="text-2xl md:text-3xl lg:w-[34ch] mb-10">
            “We are thrilled with the branding strategy that was developed.”
          </h3>
          <p
            style={{ lineHeight: "175%" }}
            className="text-neutral-700 font-light"
          >
            After partnering with Innovate Design for a comprehensive rebrand,
            we've been exceedingly pleased with the outcome. Their thorough
            market research and analysis pinpointed our target audience and
            carved out a distinctive brand position for us. The team designed a
            striking logo and ensured cohesive branding across all platforms.
          </p>
          <p
            style={{ lineHeight: "175%" }}
            className="text-neutral-700 mt-8 font-light"
          >
            This refreshed brand identity has significantly distinguished us in
            the market and boosted our sales. We strongly endorse Innovate
            Design for any business aiming to rebrand or rejuvenate their
            identity.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-32">
        <div className="cols-span-1">
          {/* First column intentionally left empty */}
        </div>
        <div className="col-span-1 flex justify-between items-start">
          <Image src="logo-2.svg" alt="Logo" width={150} height={150} />
        </div>
        <div className="col-span-2 border-b pb-16">
          <h3 className="text-2xl md:text-3xl lg:w-[34ch] mb-10">
            “Expert Brand Management from Innovate Design”
          </h3>
          <p style={{ lineHeight: "175%" }} className="text-neutral-700">
            For our expanding business, establishing a strong and consistent
            brand was crucial. Innovate Design's brand management services were
            instrumental in achieving this. They performed a comprehensive brand
            audit, delivering insightful feedback and actionable
            recommendations.
          </p>
          <p style={{ lineHeight: "175%" }} className="text-neutral-700 mt-8">
            Their continual monitoring and management of our branding efforts
            have ensured consistency and alignment with our business objectives.
            We are extremely satisfied with the outcomes and strongly recommend
            Innovate Design's brand management services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
