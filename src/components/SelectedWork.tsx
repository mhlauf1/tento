import React from "react";
import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";

const workData = [
  {
    image: "/selected-1.png",
    title: "FreshFare",
    buttonText: "Branding, Identity Design",
    href: "/marketing",
  },
  {
    image: "/selected-2.png",
    title: "Organic Market",
    buttonText: "Social Media, Packaging",
    href: "/marketing",
  },
  {
    image: "/selected-3.png",
    title: "Eco Constructors",
    buttonText: "Brand Packaging",
    href: "/marketing",
  },
  {
    image: "/selected-4.png",
    title: "Tech Insights",
    buttonText: "Branding, Identity Design",
    href: "/marketing",
  },
];
type Props = {};

const SelectedWork = (props: Props) => {
  return (
    <section className="py-48">
      <SectionHeader text="Our Work" />
      <div className="mt-8 mb-16 flex justify-between">
        <h2>Selected Work</h2>
        <button
          style={{ letterSpacing: ".5px" }}
          className="border text-neutral-600 px-6 py-2 rounded-full"
        >
          All Work
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {workData.map((item) => (
          <WorkCard
            image={item.image}
            title={item.title}
            buttonText={item.buttonText}
            href={item.href}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
