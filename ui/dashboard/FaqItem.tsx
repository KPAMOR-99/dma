import clsx from "clsx";

import minusCircle from "@/public/minus-cirlce.svg";
import addCircle from "@/public/add-circle.svg";
import Image from "next/image";


type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FaqItem({question ,answer, isOpen, onClick}: FaqItemProps) {
  return (
    <>
      <li className="p-5 flex items-start gap-5 justify-between bg-[#fefefe] border border-gray-100 rounded-sm w-full ">
        <div className="flex flex-col gap-1 items-start justify-start">
          <h1 className="text-md font-semibold">
            {question}
          </h1>
          <p
            className={clsx(
              "text-light text-sm",
              isOpen ? "block" : "hidden"
            )}
          >
           {answer}
          </p>
        </div>

        <button onClick={onClick} className="w-[5%] flex-none" >
          {isOpen ? (
            <Image src={minusCircle} alt="minus" width={24} height={24} className="w-full" />
          ) : (
            <Image src={addCircle} alt="add" width={24} height={24} className="w-full" />
          )}
        </button>
      </li>
    </>
  );
}
