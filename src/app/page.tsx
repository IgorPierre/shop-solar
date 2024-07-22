import { ProductType } from "@/types/productType";
import Product from "./Components/Product";
import products from "../../data/products.json";
import Banner from "./Components/Banner";

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
