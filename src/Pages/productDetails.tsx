import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../Interfaces";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>(); // grab product id from URL
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
    <div className="p-6">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img src={product.images?.[0]} alt={product.title} className="w-64" />
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
