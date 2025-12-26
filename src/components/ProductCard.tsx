import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 bg-white">
      {/* Image Placeholder */}
      <div className="bg-gray-200 h-48 w-full rounded-md mb-4 flex items-center justify-center text-gray-500">
        [Bild: {product.title}]
      </div>
      
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {product.description}
      </p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
        <Link 
          href={`/products/${product.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Details
        </Link>
      </div>
    </div>
  );
}