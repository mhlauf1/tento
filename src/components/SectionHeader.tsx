import React from "react";

type Props = {
  text: string;
};

const SectionHeader = ({ text }: Props) => {
  return (
    <>
      <span className="uppercase text-neutral-500">{text}</span>
      <div className="h-[1px] w-full bg-neutral-100 mt-4" />
    </>
  );
};

export default SectionHeader;
