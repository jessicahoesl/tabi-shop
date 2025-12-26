export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Mathe Klasse 4 - Geometrie",
    description: "Umfassende Tafelbilder zur Einführung in die Geometrie.",
    price: 4.99,
    imageUrl: "/placeholder-math.jpg", // We'll add images later
  },
  {
    id: "2",
    title: "Deutsch Klasse 3 - Grammatik",
    description: "Anschauliche Darstellungen der Wortarten.",
    price: 3.99,
    imageUrl: "/placeholder-german.jpg",
  },
  {
    id: "3",
    title: "Sachkunde - Der Wald",
    description: "Alles über Bäume, Tiere und das Ökosystem Wald.",
    price: 5.99,
    imageUrl: "/placeholder-forest.jpg",
  },
];