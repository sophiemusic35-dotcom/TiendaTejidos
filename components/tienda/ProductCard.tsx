"use client";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Product, useCart } from "@/context/CartContext";

export default function ProductCard({product}: {product: Product}) {
    const {add} = useCart();

    return (
        <div className="bg-white rounded-2x1 shadow-md overflow-hidden group hover:shadow-x1 transition-shadow duration-300 flex flex-col">

            {/* Imagen */}
            <div className="relative h-56 bg-sabe/20 overflow-hidden">
            <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 left-3 bg-charcoal text-cream text-xs px-3 py-1 rounded-full">
                {product.category}
            </span>
            </div>

            {/* Info */}
            
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg mb-1">{product.name}</h3>
                <p className="text-charcoal/60 text-sm mb-4 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-mocha font-bold text-lg">
                        4{product.price.toLocaleString("es-CO")}
                    </span>
                    <button onClick={() => add(product)}
                        className="flex items-center gap-2 bg-charcoal text-cream text-sm px-4 py-2 rounded-full hover _bg-mocha transitio-colors duration-200">
                        <ShoppingBag size={15}/>
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
}