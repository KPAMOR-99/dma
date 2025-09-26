import { Star } from "@deemlol/next-icons";
import Image from "next/image";

export default function ScrollCard({content, image, name, company, className}:{company:string, className?:string, content:string, image:string, name:string}) {
  return (
    <div className={`${className}`}>
         {/* // no props for rating yet */}
    <div className={`flex flex-col gap-5 bg-[#f1ecff] p-10 rounded-xl shadow-xl w-[613] h-[384] `}>
      <div className="flex justify-between">
        <p className="flex justify-center items-center gap-2">
          <Star size={24} color="#333" />
          <span>5/5</span>
        </p>
        <p>5/5</p>
      </div>
      <p className="font-bold">
       {content}
      </p>
      <div className="mt-5 flex items-center justify-start gap-5 w-fit">
        <Image src={image} alt="profile pic" width={64} height={64} />
        <div className="flex flex-col justify-between">
            <p className="text-md md:text-lg font-bold">{name}</p>
            <p className="font-light">{company}</p>
        </div>
      </div>
    </div>

    </div>
   
  );
}
