import { notFound } from 'next/navigation';
import products from '../../../../data/products.json';
import { ProductType } from '@/types/productType';

type Params = {
  params: {
    id: string;
  };
};

export default function ProductDetails({ params }: Params) {
  const { id } = params;

  const product = products.find((product: ProductType) => product.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-96 object-contain" />
      <p className="text-lg">{product.description}</p>
      <p className="text-orange font-semibold text-xl">R$ {product.price.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}