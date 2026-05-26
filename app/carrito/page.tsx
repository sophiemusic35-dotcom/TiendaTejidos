"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Carrito() {
  const { items, remove, increment, decrement, total, clear } = useCart();

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <p className="font-display text-3xl mb-4">Tu carrito está vacío</p>
        <p className="text-charcoal/60 mb-8">¡Agrega algunos muñequitos!</p>
        <Link href="/catalogo"
          className="bg-charcoal text-cream px-8 py-3 rounded-full hover:bg-mocha transition-colors">
          Ver catálogo
        </Link>
      </div>
    );

  return (
    <section className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl mb-10">Tu carrito</h1>

      <div className="flex flex-col gap-4 mb-10">
        {items.map(item => (
          <div key={item.id}
            className="flex items-center gap-5 bg-white rounded-2xl p-4 shadow-sm">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-sage/20">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-charcoal/60 text-sm">${item.price.toLocaleString("es-CO")}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decrement(item.id)}
                className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-blush">
                <Minus size={13} />
              </button>
              <span className="w-6 text-center font-medium">{item.qty}</span>
              <button onClick={() => increment(item.id)}
                className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-blush">
                <Plus size={13} />
              </button>
            </div>
            <p className="w-24 text-right font-bold">
              ${(item.price * item.qty).toLocaleString("es-CO")}
            </p>
            <button onClick={() => remove(item.id)}
              className="text-charcoal/40 hover:text-red-400 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center
        bg-charcoal text-cream p-6 rounded-2xl gap-4">
        <div>
          <p className="text-cream/60 text-sm">Total a pagar</p>
          <p className="font-display text-3xl text-gold">${total.toLocaleString("es-CO")}</p>
        </div>
        <div className="flex gap-3">
          <button onClick={clear}
            className="border border-cream/30 text-cream/70 px-5 py-2 rounded-full
              text-sm hover:border-cream transition-colors">
            Vaciar
          </button>
          <button className="bg-gold text-charcoal font-semibold px-7 py-2 rounded-full
            hover:bg-blush transition-colors">
            Finalizar pedido
          </button>
        </div>
      </div>
    </section>
  );
}