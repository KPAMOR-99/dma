import DropdownCard from "./DropdownCard";
import seoImage from '@/public/dropdown card icons/2147226944.png'

export default function Dropdown() {
  return (
    <div className=" hidden p-4 flex flex-col w-[50%] bg-[#FEFEFE] border border-gray-100 shadow-xs rounded-xl absolute top-23 right-10  z-5  ">
      <div className=" w-full mb-5 p-2 border-b border-gray-200">
        <h1 className="text-2xl font-extrabold text-[#7642FE]">Our Services</h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      <DropdownCard
        image={seoImage}  
        title="kfyjgf"
        content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequuntur pariatur."
      />
      </div>
    </div>
  );
}
