import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  buttonText: string;
  href: string;
};

const WorkCard = ({ image, title, buttonText, href }: Props) => {
  return (
    <div>
      <Link href={href}>
        <div className="h-auto w-auto">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div className="flex mt-4 justify-between">
          <h3>{title}</h3>
          <span className="border border-neutral-600 text-neutral-600 rounded-full px-4 py-1.5">
            {buttonText}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default WorkCard;
