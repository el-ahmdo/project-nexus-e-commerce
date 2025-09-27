import type React from "react";
import icon from "../assets/Icon.png";

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <div className="flex-1 flex-col h-[380px] rounded-[15px] shadow-md overflow-hidden">
      {/* top image */}
      <div
        className="w-full h-[65%] rounded-t-[15px] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}></div>

      {/* bottom content */}
      <div className="w-full h-[35%] bg-[#134E24] flex flex-col rounded-b-[15px] p-2">
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="text-[14px] text-amber-50 font-bold">{title}</p>
            <p className="text-[14px] text-amber-50 font-bold">${price}</p>
          </div>
          <p className="text-[12px] text-amber-50 font-light leading-4 text-left mt-1 line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>

        <button className="w-[95%] mx-auto flex items-center justify-center gap-1 bg-[#387F1A] text-white md:p-2 p-1 rounded mt-2 hover:bg-[#4fae26] cursor-pointer">
          Add to cart
          <img src={icon} alt="cart icon" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
