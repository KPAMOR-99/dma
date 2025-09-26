import Image from "next/image";


export default function DropdownCard({image, title, content }: {image:string | any, title:string, content:string}){
    return(
        <div className="p-3 flex flex-col gap-4 justify-start border rounded-md border-gray-200 shadow-xs">
            <Image src={image} alt="icon" width={40} height={40}/>
            <div className="flex flex-col space-between gap-3">
                <h2 className="font-extrabold">{title}</h2>
                <p className="font-normal">{content}</p>
            </div>

        </div>
    )
}

