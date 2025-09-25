import axios from "axios";
import React, { useEffect, useState } from "react";
import type { Product } from "../Interfaces";

const Home: React.FC = () => {
  const ITEMS_PER_PAGE = 9;

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // filters
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  // Fetch categories once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get<string[]>(
          "https://dummyjson.com/products/category-list"
        );
        setCategories(["all", ...res.data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products with pagination, category, and sort
  const fetchProducts = async (page: number) => {
    try {
      setLoading(true);
      setError(null);

      const skip = (page - 1) * ITEMS_PER_PAGE;
      let url = `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`;

      // if a category is selected, hit the category endpoint
      if (category !== "all") {
        url = `https://dummyjson.com/products/category/${category}?limit=${ITEMS_PER_PAGE}&skip=${skip}`;
      }

      const res = await axios.get(url);
      console.log();

      let fetched = res.data.products;

      // apply sorting client-side (DummyJSON doesn’t support server sort)
      if (sortOrder === "asc") {
        fetched = [...fetched].sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        fetched = [...fetched].sort((a, b) => b.price - a.price);
      }

      setProducts(fetched);
      setTotalProducts(res.data.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  // refetch when page, category, or sort changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage, category, sortOrder]);

  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
          aria-label="Filter by category">
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1);
          }}
          aria-label="Sort by price">
          <option value="none">Sort By Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-2">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="h-40 mx-auto object-cover"
            />
            <h3 className="text-sm font-semibold mt-2">{p.title}</h3>
            <p className="text-green-700 font-bold">${p.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-2 flex-wrap">
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
