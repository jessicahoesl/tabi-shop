"use client";

import { useState } from "react";

interface BuyButtonProps {
  productId: string;
  className?: string; // allow custom styling
}

export function BuyButton({ productId, className }: BuyButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuy = async (e: React.MouseEvent) => {
    // prevent the click from navigating if it's inside a Link
    e.preventDefault(); 
    
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Fehler beim Starten des Checkouts");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Ein unbekannter Fehler ist aufgetreten.");
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={isLoading}
      className={`bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? "Laden..." : "Kaufen"}
    </button>
  );
}