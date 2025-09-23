import axios from "axios";
import React, { useEffect, useState } from "react";
import type { Product } from "../Interfaces";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // show loader
        setError(null); // clear previous errors
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        setProducts(res.data); // full source list
        setFiltered(res.data); // initial visible list
        const uniqueCats = ["all", ...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCats); // options for <select>
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCategory(selected);

    let updated = [...products]; // copy so we don't mutate source

    if (selected !== "all")
      updated = updated.filter((p) => p.category === selected);

    if (sortOrder === "asc") updated.sort((a, b) => a.price - b.price);
    else if (sortOrder === "desc") updated.sort((a, b) => b.price - a.price);

    setFiltered(updated);
  };

  // Handle price sorting

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setSortOrder(order);

    let updated =
      category === "all"
        ? [...products]
        : products.filter((p) => p.category === category);

    if (order === "asc") updated.sort((a, b) => a.price - b.price);
    else if (order === "desc") updated.sort((a, b) => b.price - a.price);

    setFiltered(updated);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      {error && <p className="text-red-600 mb-2">Error: {error}</p>}

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select value={sortOrder} onChange={handleSortChange}>
          <option value="none">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="border rounded p-2">
            <img src={p.image} alt={p.title} className="h-40 mx-auto" />
            <h3 className="text-sm font-semibold mt-2">{p.title}</h3>
            <p className="text-green-700 font-bold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
