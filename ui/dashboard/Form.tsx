import { ChevronRight } from "@deemlol/next-icons";
import Link from "next/link";

export default function Form() {
  return (
    <form action="" className="flex flex-col items-start justify-start w-full">
      <div className="grid grid-cols-2 gap-4  w-full">
        <input
          type="text"
          placeholder="first name"
          className="p-4 border border-gray-200 rounded-lg "
        />
        <input
          type="text"
          placeholder="last name"
          className="p-4 border border-gray-200 rounded-lg "
        />
        <input
          type="email"
          placeholder="email address"
          className="p-4 border border-gray-200 rounded-lg "
        />
        <input
          type="tel"
          placeholder="phone number"
          className="p-4 border border-gray-200 rounded-lg "
        />
        <select className="border text-[#6B7280] p-4 border-gray-200 rounded-md col-span-2">
          <option value="option1">a</option>
          <option value="option2">b</option>
          <option value="option3">c</option>
        </select>
        <input
          type="text"
          placeholder="enter message"
          className="p-4 border border-gray-200 rounded-lg col-span-2"
        />
        
      </div>

      <Link
        type="submit"
        href={"/"}
        className="p-5 mt-5 bg-[#7642FE] text-[#fefefe] rounded-lg flex justify-between items-center"
      >
        {" "}
        Free Consultation <ChevronRight />
      </Link>
    </form>
  );
}
