import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import banner from "../assets/banner.png";
import banner2 from "../assets/Banner2.png";
import axios from "axios";
import type { Product } from "../Interfaces";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [dealProducts, setDealProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          "https://dummyjson.com/products?limit=4&skip=50"
        );
        setProducts(res.data.products);
      } catch {
        setError("Failed to fetch featured products");
      }

      try {
        const res2 = await axios.get("https://dummyjson.com/products");
        const cheapest = res2.data.products
          .sort((a: any, b: any) => a.price - b.price)
          .slice(0, 4);
        setDealProducts(cheapest);
      } catch {
        setError("Failed to fetch deal products");
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className=" flex flex-col w-full gap-10 ">
      {/* baner1 */}
      <div>
        <img
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover "
        />
      </div>

      {/* latest products  */}
      <div className="flex flex-col">
        <p className="md:text-[60px] text-[30px] font-bold text-center">
          {" "}
          Latest Products{" "}
        </p>

        {error && (
          <p className="text-red-500 font-semibold text-center mt-4">{error}</p>
        )}
        {loading && !error && (
          <p className="text-gray-500 text-center mt-4">Loading products...</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {products.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <ProductCard
                key={p.id}
                title={p.title}
                price={p.price}
                description={p.description}
                image={p.images?.[0]}
              />
            </Link>
          ))}
        </div>
        {/* Categories  */}

        <p className="text-[60px] font-bold text-center"> Deals Of The Day </p>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4 w-full">
          {dealProducts.map((p) => (
            <Link to={`/product/${p.id}`} key={p.id}>
              <ProductCard
                key={p.id}
                title={p.title}
                price={p.price}
                description={p.description}
                image={p.images?.[0]}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* banner2 */}
      <div>
        <div>
          <img
            src={banner2}
            alt="Banner"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
