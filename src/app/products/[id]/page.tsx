import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { BuyButton } from "@/components/BuyButton";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  // 1. Find the product
  const product = products.find((p) => p.id === id);

  // 2. If not found, show 404
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        <div className="bg-gray-200 h-64 md:h-auto md:w-1/2 flex items-center justify-center text-gray-500 text-xl font-medium">
          {product.title}
        </div>

        <div className="p-8 md:w-1/2 flex flex-col">
          <Link href="/" className="text-gray-500 hover:text-gray-900 mb-6 text-sm">
            ← Zurück zur Übersicht
          </Link>
          
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.description}
            <br /><br />
            Dieses Tafelbild eignet sich hervorragend für den Einstieg in das Thema. 
            Es ist hochauflösend und kann direkt über den Beamer projiziert werden.
          </p>

          <div className="mt-auto border-t pt-6">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toFixed(2)} €
              </span>
              <BuyButton 
                productId={product.id} 
                className="px-8 py-3 text-lg font-bold shadow-md hover:shadow-lg transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}