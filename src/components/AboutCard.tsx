import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
};

const AboutCard = ({ title, description }: Props) => {
  return (
    <div className="bg-grey pt-12 pb-24 px-10 flex flex-col gap-6">
      <h3 className="text-3xl text-neutral-600">{title}</h3>
      <p className="text-md text-neutral-500">{description}</p>
    </div>
  );
};

export default AboutCard;
