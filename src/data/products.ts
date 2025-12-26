export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  filename: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Trigonometrische Funktionen - Tafelbild",
    description: "Trigonometrische Funktionen Tafelbild M10_AB4...",
    price: 4.99,
    imageUrl: "/placeholder-math.jpg",
    filename: "M10_AB4_trigonometrische_Funktionen_Tafelbild.pdf", 
  },
  {
    id: "2",
    title: "Trigonometrische Funktionen - Schülerversion",
    description: "Trigonometrische Funktionen Schülerversion M10_AB4...",
    price: 3.99,
    imageUrl: "/placeholder-math2.jpg",
    filename: "M10_AB4_trigonometrische_Funktionen_Schuelerversion.pdf"
  },
  {
    id: "3",
    title: "Wahrscheinlichkeit und Laplace - Tafelbild",
    description: "Wahrscheinlichkeit und Laplace Tafelbild M10_AB1...",
    price: 5.99,
    imageUrl: "/placeholder-math3.jpg",
    filename: "M10_AB1_Laplace_Wahrscheinlichkeit_Tafelbild.pdf"
  },
];