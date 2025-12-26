
import { Product } from "@/data/products";
import Link from "next/link";
import { BuyButton } from "./BuyButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 bg-white flex flex-col h-full group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="bg-gray-100 h-48 w-full rounded-md mb-4 flex items-center justify-center text-gray-500 font-medium group-hover:bg-gray-200 transition-colors">
          {product.title}
        </div>
        
        <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h2>
      </Link>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
        <BuyButton 
          productId={product.id} 
          className="px-4 py-2 text-sm font-medium"
        />
      </div>
    </div>
  );
}