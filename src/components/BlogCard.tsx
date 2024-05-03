import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
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
      <div className="flex mt-4 gap-4  items-start flex-col">
        <h3 className="text-xl">{title}</h3>
        <div
          style={{ letterSpacing: ".25px" }}
          className="border-b text-sm border-neutral-600 text-neutral-600 py-1"
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
