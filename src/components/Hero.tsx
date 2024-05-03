import React from "react";
import LogoCarousel from "./LogoCarousel";
import { logosData } from "@/lib/data";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col items-start pt-48 pb-16">
      <span className="bg-orange-50 px-3 py-1 text-sm text-neutral-600 rounded-full">
        We are hiring!
      </span>
      <h1 className="lg:w-[20ch] mt-6">
        Shaping Futures Through Brand Innovation.
      </h1>
      <p className="mt-8 mb-12 lg:w-[35vw] text-neutral-500">
        Create a Brand That Resonates: Turn your vision into reality with our
        tailored branding solutions.
      </p>
      <button className="py-4 mb-16 bg-neutral-800 rounded-full text-neutral-100 px-8">
        Start your journey
      </button>
      <LogoCarousel images={logosData} />
    </section>
  );
};

export default Hero;
