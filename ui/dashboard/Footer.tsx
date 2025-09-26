import Link from "next/link";
import LogoBlock from "@/public/Logo block.svg";
import Image from "next/image";
import facebook from "@/public/facebook.svg";
import whatsapp from "@/public/whatsapp.svg";
import instagram from "@/public/instagram.svg";

export default function Footer() {
  return (
    <footer className="m-10 py-20 px-40 bg-[#22003C] text-[#fefefe] rounded-3xl">
      <div className="flex items-start justify-between gap-15">
        <div className="flex flex-1 flex-col gap-2 items-start justify-start">
          <Image src={LogoBlock} alt="logoblock" width={239} height={70} />
          <p>
            A platform that offers digital marketing solutions to individuals
            and businesses at their fingertips.
          </p>
          <div className="justify-between flex gap-2">
            <Link href={"/"}>
              <Image src={instagram} alt="facebook" width={32} height={32} />
            </Link>
            <Link href={"/"}>
              <Image src={facebook} alt="facebook" width={32} height={32} />
            </Link>
            <Link href={"/"}>
              {" "}
              <Image src={whatsapp} alt="facebook" width={32} height={32} />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="text-md mb-4">Company</h1>
          <Link href={"/home"} className="text-sm">
            Home
          </Link>
          <Link href={"/about"} className="text-sm">
            About Us
          </Link>
          <Link href={"/services"} className="text-sm">
            Secvices
          </Link>
          <Link href={"/payments"} className="text-sm">
            Payments & Billings
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="text-md mb-4">Others</h1>
          <Link href={"/home"} className="text-sm">
            Support & help
          </Link>
          <Link href={"/"} className="text-sm">
            {" "}
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-sm">
            Secvices
          </Link>
          <Link href={"/"} className="text-sm">
            Liscence and agreements
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <h1 className="text-md mb-4">Contact</h1>
          <Link href={"/home"} className="text-sm">
            Support & help
          </Link>
          <Link href={"/"} className="text-sm">
            {" "}
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-sm">
            Secvices
          </Link>
          <Link href={"/"} className="text-sm">
            Liscence and agreements
          </Link>
        </div>
      </div>
      <hr className="m-5 w-full text-gray-200/20" />
      <span className="flex items-center justify-center">
        @Digital Marketing Agency. All rights reserved  {new Date().getFullYear()}
      </span>
    </footer>
  );
}
