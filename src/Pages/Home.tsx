import axios from "axios";
import React, { useEffect, useState } from "react";
import type { Product } from "../Interfaces";

const Home = () => {
  const ITEMS_PER_PAGE = 6;

  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        setProducts(res.data);
        setFiltered(res.data);
        const uniqueCats = ["all", ...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCats);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
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

    let updated =
      selected === "all"
        ? [...products]
        : products.filter((p) => p.category === selected);

    // Apply sorting if active
    if (sortOrder === "asc") updated.sort((a, b) => a.price - b.price);
    else if (sortOrder === "desc") updated.sort((a, b) => b.price - a.price);

    setFiltered(updated);
    setCurrentPage(1); // reset pagination
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
    setCurrentPage(1); // reset pagination
  };

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
        {paginatedProducts.map((p) => (
          <div key={p.id} className="border rounded p-2">
            <img src={p.image} alt={p.title} className="h-40 mx-auto" />
            <h3 className="text-sm font-semibold mt-2">{p.title}</h3>
            <p className="text-green-700 font-bold">${p.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage ? "bg-blue-500 text-white" : ""
            }`}>
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
