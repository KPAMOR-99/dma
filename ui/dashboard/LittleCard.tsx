import A from "@/public/littleCardComps/Frame 2147227292.svg";
import Image from "next/image";

export default function LittleCard({image, title, content}:{image:any, title:string, content:string}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 w-[186] h-fit">
      <div className="">
        <Image src={image} alt="icon" width={88} height={88} />
      </div>
      <div className="flex flex-col gap-1 text-center items-center justify-center">
        <h2 className="font-bold text-md">{title}</h2>
        <p className="font-extralight text-sm">{content}</p>
      </div>
    </div>
  );
}
