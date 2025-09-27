import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../Interfaces";
import icon from "../assets/Icon.png";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-2 flex flex-col md:gap-8 gap-4">
      <h2 className="md:text-[60px] text-[30px] font-bold text-center">
        Poduct Details{" "}
      </h2>

      <div className="flex flex-col md:flex-row w-full justify-between gap-4">
        <div
          className="w-full md:w-[43%] min-h-[250px] md:h-[400px] bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${product.images?.[0]})` }}></div>
        <div className="md:w-[55%] w-full flex flex-col justify-between ">
          <div className="w-full h-[60%] flex flex-col gap-4">
            <div className=" flex  ">
              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Title:{" "}
                  <span className="md:text-[22px] text-[15px]  font-medium">
                    {" "}
                    {product.title}{" "}
                  </span>
                </p>
              </div>

              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Price:{" "}
                  <span className="md:text-[22px] text-[15px]  font-medium">
                    {" "}
                    {product.price}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex ">
              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Brand:{" "}
                  <span className="md:text-[22px] text-[15px]  font-medium">
                    {" "}
                    {product.brand ? product.brand : "none"}
                  </span>
                </p>
              </div>

              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Waranty:{" "}
                  <span className="md:text-[22px] text-[15px]  font-medium">
                    {" "}
                    {product.warrantyInformation}{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex ">
              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Rating:{" "}
                  <span className="md:text-[22px] text-[15px]  font-medium">
                    {" "}
                    {product.rating}{" "}
                  </span>
                </p>
              </div>
              <div className="w-[50%]">
                <p className="md:text-[22px] text-[15px] text-black font-bold">
                  Stock :
                  <span className="md:text-[22px] text-[15px] font-medium">
                    {" "}
                    {product.stock}{" "}
                  </span>
                </p>
              </div>
            </div>

            <p className="md:text-[22px] text-[15px] text-black font-bold">
              Description:{" "}
              <span className="md:text-[20px] text-[17px] font-medium line-clamp-3 md:line-clamp-0">
                {" "}
                {product.description}{" "}
              </span>
            </p>
          </div>
          <div className="w-full h-[30%] md:h-[20%] flex md:flex-row flex-col md:justify-between mt-15 md:mt-0">
            <button className="md:w-[48%] w-full flex items-center justify-center gap-1 bg-[#387F1A] text-white md:p-2 p-1 rounded mt-2 hover:bg-[#4fae26] cursor-pointer">
              Add to cart
              <img src={icon} alt="cart icon" className="w-3 h-3" />
            </button>

            <button className="md:w-[48%]  w-full flex items-center justify-center gap-1 bg-[#387F1A] text-white md:p-2 p-1 rounded mt-2 hover:bg-[#4fae26] cursor-pointer">
              buy now
              <img src={icon} alt="cart icon" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
      {/* thumbnails */}

      <div className="md:flex hidden md:flex-row flex-col w-full h-[200px] gap-4">
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
        <div
          className="flex-1 h-full bg-cover bg-center rounded-[15px]"
          style={{ backgroundImage: `url(${product.thumbnail})` }}></div>
      </div>

      <h2 className="md:text-[60px] text-[30px] font-bold text-center ">
        Reviews{" "}
      </h2>

      <div className="w-full md:w-[80%] h-[200px] flex flex-col md:gap-6 gap-2 mx-auto bg-[#387F1A] rounded-[15px] p-4  ">
        <p className="md:text-[22px] text-[15px] md:font-bold font-medium text-white ">
          {product.reviews?.[0]?.reviewerName}:{" "}
          <span className="font-normal">{product.reviews?.[0]?.comment} </span>
        </p>
        <p className="md:text-[22px] text-[15px] md:font-bold font-medium text-white ">
          {product.reviews?.[1]?.reviewerName}:{" "}
          <span className="font-normal">{product.reviews?.[1]?.comment} </span>
        </p>{" "}
        <p className="md:text-[22px] text-[15px] md:font-bold font-medium text-white ">
          {product.reviews?.[2]?.reviewerName}:{" "}
          <span className="font-normal">{product.reviews?.[2]?.comment} </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
