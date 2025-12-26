"use client";
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const handleBuy = async () => {
    try {
      // 1. Call backend API
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
      });

      const data = await response.json();

      // 2. Redirect to Stripe
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Error starting checkout");
    }
  };

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 bg-white flex flex-col h-full">
      <div className="bg-gray-100 h-48 w-full rounded-md mb-4 flex items-center justify-center text-gray-500 font-medium">
        {product.title}
      </div>
      
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
        <button 
          onClick={handleBuy}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Kaufen
        </button>
      </div>
    </div>
  );
}