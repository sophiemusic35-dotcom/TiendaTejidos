import { Product } from "@/context/CartContext";

export const product: Product[] = [
    {
        id: "1",
        name: "Osito Amigurumi Rosa",
        price: 35000,
        image: "/images/osito-rosa.jpg",
        description: "Tierno osito tejido a mano en hilo suave hipoalergenico. Perfecto como regalo.",
        category: "Osos",
    },
    {
        id: "2",
        name: "Conejita Lavanda",
        price: 38000,
        image: "/images/conejita.jpg",
        description: "Conejita de crochet con orejas largas. Rellena con fibra antialergenica.",
        category: "Conejos",
    },
    {
        id: "3",
        name: "Dinosaurio Verde",
        price: 42000,
        image: "/images/dino.jpg",
        description: "Dinosaurio amigurumi con puntitos en la espalda. Ideal para niños.",
        category: "Fantasticos",
    },
    {
        id: "4",
        name: "Gatito Beige",
        price: 36000,
        image: "/images/gatito.jpg",
        description: "Gatito tejido con expresion adorable y colita rizada.",
        category: "Gatos",
    },
    {
        id: "5",
        name: "Pulpo Arcoiris",
        price: 40000,
        image: "/images/pulpo.jpg",
        description: "Pulpo colorido con tentaculos trenzados. Un favorito de todos.",
        category: "Fantasticos",
    },
    {
        id: "6",
        name: "Oso Panda",
        price: 45000,
        image: "/images/panda.jpg",
        description: "Panda clasico en blanco y negro con acabados en hilo premium.",
        category: "Osos",
    },
];

export const categorias = [...new Set(product.map(p => p.category))]; 