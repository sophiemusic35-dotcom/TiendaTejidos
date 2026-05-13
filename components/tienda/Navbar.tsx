"use client";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar(){
    const {count} = useCart();
    const [open, setOpen] = useState(false);

    const links = [
        {href: "/", label: "Inicio"},
        {href: "/catalogo", label: "Catalogo"},
        {href: "/pedido-personalizado", label: "Pedido personalizado"},
    ];

    return(
        <header className="sticky top-0 z-50 bg-charcoal text-cream shadow-md">
            <div className="max-w-6x1 mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-display text-xl text-gold tracking-wide"> MuñecosTejido
                </Link>
                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {links.map(l =>(
                        <Link key = {l.href} href={l.href} className="hover:text-gold transition-colors duration-200">{l.label}</Link>
                    ))}
                </nav>

                {/* Cart + mobilr toggle */}
                <div className="flex items-ccenter gap-4">
                    <Link href="/carrito" className="relative">
                    <ShoppingBag size = {22} className="hover: text-gold transition-colors"/>
                    {count > 0 &&(
                        <span className="absolute -top-2 -right-2 bg-blush text-charcoal text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{count}
                        </span>
                    )}
                    </Link>
                    <button className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open &&(
                <nav className="md: hidden bg-mocha px-4 pb-4 pb-4 flex felx-col gap-3 text-sm">
                    {links.map(l =>(
                        <Link key={l.href} href={l.href}
                        onClick={() => setOpen(false)}
                        className="hover:text-gold transition-colors py-1 border-b border-charcoal">
                        {l.label}
                    </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}