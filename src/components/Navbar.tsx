import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="px-12 py-4 border-b fixed backdrop-blur-md w-full">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-bold">Tento</h2>
        </div>
        <div className="flex item-center gap-8">
          <ul className="lg:flex hidden items-center text-neutral-600 gap-6">
            <li>Work</li>
            <li>Services</li>
            <li>About</li>
            <li>Blog</li>
          </ul>
          <button className="px-6 py-2 border rounded-full">
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
