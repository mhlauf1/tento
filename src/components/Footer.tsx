import React from "react";
import Link from "next/link";
import { footerLinks } from "@/lib/data";

type Props = {};

const FooterList = ({ title, links }: any) => (
  <div>
    <h4 className="border-b  border-gray-100 font-extralight pb-2 text-xl mb-8">
      {title}
    </h4>
    <div className="flex flex-col gap-6 items-start">
      {links.map((link: any) => (
        <Link className="text-sm font-extralight" href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = (props: Props) => {
  return (
    <footer className="px-8 lg:px-20 pb-6">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-12 ">
        <div>
          <h2 className="logo-text">Tento</h2>
        </div>
        {footerLinks.map((item) => (
          <FooterList title={item.title} links={item.links} />
        ))}
      </div>

      <div className="h-[1px] w-full mt-16 mb-8 bg-gray-100" />
      <div className="flex flex-col md:flex-row gap-y-4 items-start justify-between md:items-center">
        <div className="flex gap-4">
          <p className="text-sm font-extralight text-gray-400">Privacy</p>
          <p className="text-sm font-extralight text-gray-400">Imprint</p>
        </div>
        <p className="text-sm font-extralight text-gray-400">
          Powered By Michael Laufersweiler. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
