"use client"; 
import { ProductType } from "@/types/productType";
import Product from "./Components/Product";
import products from "../../data/products.json";
import { useSearch } from "./Context/SearchContext";
import FilterBar from "./Components/FilterBar";
import Banner from "./Components/Banner";

export default function Home() {
  const { search, category } = useSearch();

  const filteredProducts = products.filter((product: ProductType) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner />
      <FilterBar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {filteredProducts.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}

