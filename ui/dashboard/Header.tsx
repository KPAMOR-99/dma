import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "@deemlol/next-icons";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <header className="p-5 flex items-center justify-between  border-b border-gray-200 shadow-sm">
      <div className="mx-6 bg-">
        <Image src="/logo.png" alt="logo" height={150} width={100} />
      </div>

      <div className=" flex items-center justify-center  gap-5 md:justify-around ">
        <div>
          {/* these next two divs shwo dependind on the sixe of the screen */}
          <div className=" hidden   md:block">
            <ul className="flex items-center justify-center gap-10 ">
              <li>
                <Link href={"/home"} className="text-normal md:text-md">Home</Link>
              </li>
              <li>
                <Link href={"/about"} className=" text-sm md:text-md">About Us</Link>
              </li>
              <li className="flex justify-between">
                <Link href={"/services"} className="text-normal md:text-md">Services</Link>
                <ChevronDown size={24} color="#141313ff" />
              </li>
              <li>
                <Link href={"/contact"} className=" text-sm md:text-md">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>

        <div className="mx-3 flex items-center justify-between gap-3">
          <Link
            href={"/login"}
            className="px-4 py-2 text-[#7642FE] text-sm md:text-md hover:border hover:border-[#7642FE] hover:rounded-md"
          >
            Login
          </Link>
          <Link
            href={"/sign-up"}
            className="px-4 py-2 text-[#7642FE] text-sm md:text-md border border-[#7642FE] rounded-md"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
