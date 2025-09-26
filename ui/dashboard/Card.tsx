import Image from "next/image";

import Link from "next/link";

export default function Card({title, description, smallIcon,image}:{title:string, description:string, smallIcon:any, image:any}) {
  return (
    
    // w-full and h-full becuase i want the grid to control the size of cards
    <div className="relative m-2 flex flex-col gap-10 border border-gray-300 rounded-xl shadow-sm w-full h-full">
      <Link href={"/"} className="absolute top-5 left-5 z-1">
        <Image src={smallIcon} alt="small icon" width={40} height={40} />
      </Link>

      <div className="w-full aspect-[16/9] relative">
        <Image
          src={image}
          alt="card image"
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-3 flex flex-col justify-between items-start gap-5 ">
        <h1 className="font-bold text-lg md:text-xl">{title}</h1>
        <p>{description}</p>
      </div>

    </div>
  );
}
