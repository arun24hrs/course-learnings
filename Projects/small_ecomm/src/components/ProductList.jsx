import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductItem from "./ProductItem";

function ProductList() {
  const { data: products, error } = useFetch("https://dummyjson.com/products");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <div>Error fetching products!</div>;

  return (
    <div className="productList">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="productsGrid">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
