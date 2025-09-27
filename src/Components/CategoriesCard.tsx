import type React from "react";

interface CategoryCardProps {
  name: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
  return (
    <div className="flex-1 flex-col h-[350px] rounded-[15px] shadow-md overflow-hidden">
      {/* top image */}
      <div
        className="w-full h-[70%] rounded-t-[15px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}></div>

      {/* bottom content */}
      <div className="w-full h-[30%] bg-[#134E24] flex items-center justify-center rounded-b-[15px] p-2">
        <p className="text-[16px] text-amber-50 font-bold text-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
