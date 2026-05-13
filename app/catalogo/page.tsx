"use client"
import { useState } from "react";
import { product, categorias } from "@/data/products";
import ProductCard from "@/components/tienda/ProductCard";
import { Cat } from "lucide-react";
import { Product } from "@/context/CartContext";

export default function Catalogo(){
    const [active, setActive] = useState("Todos");

    const filtered = active === "Todos"
    ? product
    : product.filter((p: Product) => p.category === active);

    return (
        <section className="max-w-6x1 mx-auto px-6 py-14">
            <h1 className="font-display text-4x1 text-center mb-2">Catalogo</h1>
            <p className="text-center text-charcoal/60 mb-10">Todos tejidos a mano con amor</p>

            {/* Filtros */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
                {["Todos", ...categorias].map(Cat =>(
                    <button key={Cat} onClick={() => setActive(Cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-color duration-200 ${active === Cat
                        ? "bg-charcoal text-cream"
                        : "bg-white border border-charcoal/20 hover: border.charcoal"}`}>
                            {Cat}
                        </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filtered.map((p: Product) => <ProductCard key={p.id} product={p}/>)}
            </div>
        </section>
    );
}