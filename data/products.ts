import { Product } from "@/context/CartContext";

export const product: Product[] = [
  {
    id: "1",
    name: "Osito Amigurumi Rosa",
    price: 35000,
    image: "/images/osito-rosa.jpg",
    description: "Tierno osito tejido a mano en hilo suave hipoalergénico. Perfecto como regalo.",
    category: "Osos",
  },
  {
    id: "2",
    name: "Conejita Lavanda",
    price: 38000,
    image: "/images/conejita.jpg",
    description: "Conejita de crochet con orejas largas. Rellena con fibra antialérgica.",
    category: "Conejos",
  },
  {
    id: "3",
    name: "Dinosaurio Verde",
    price: 42000,
    image: "/images/dino.jpg",
    description: "Dinosaurio amigurumi con puntitos en la espalda. Ideal para niños.",
    category: "Fantásticos",
  },
  {
    id: "4",
    name: "Gatito Beige",
    price: 36000,
    image: "/images/gatito.jpg",
    description: "Gatito tejido con expresión adorable y colita rizada.",
    category: "Gatos",
  },
  {
    id: "5",
    name: "Pulpo Arcoíris",
    price: 40000,
    image: "/images/pulpo.jpg",
    description: "Pulpo colorido con tentáculos trenzados. Un favorito de todos.",
    category: "Fantásticos",
  },
  {
    id: "6",
    name: "Oso Panda",
    price: 45000,
    image: "/images/panda.jpg",
    description: "Panda clásico en blanco y negro con acabados en hilo premium.",
    category: "Osos",
  },
];

export const categories = [...new Set(product.map(p => p.category))];