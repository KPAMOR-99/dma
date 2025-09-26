"use client";

import { Menu } from "@deemlol/next-icons";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Hamburger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>
        <Menu />
      </button>
    
      <ul
        className={clsx(
          "bg-[#fdabdc] p-3 rounded-lg flex flex-col z-3 transition-all duration-300",
          isOpen ? "block" : "hidden"
        )}
      >
        <li className="pb-1 mb-2 w-full border-b border-b-gray-100 hover:bg-gray-500">
          <Link href="/home">Home</Link>
        </li>
        <li className="pb-1 mb-2 border-b border-b-gray-100 hover:bg-gray-500">
          <Link href="/about">About</Link>
        </li>
        <li className="pb-1 mb-2 border-b border-b-gray-100 hover:bg-gray-500">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
