import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-cream py-10 px-6">
            <div className="max-w-6x1 mx-auto flex flex-col md:flex-row justify-between gap-8">
                      {/* Logo y descripcion */}
 
                <div>
                    <p className="font-display text-gold text-xl mb-2">MuñecosTejido</p>
                    <p className="text-cream/60 text-sm max-w-xs">
                    cada muñeco es tejido a mano con amor y materiales de calidad. 
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 text-sm">
                    <p className="text-gold font-medium mb-1">Navegar</p>
                    <Link href="/" className="text-cream/60 hover:text-cream transition-colors">Inicio</Link>
                    <Link href="/catalogo" className="text-cream/60 hover:text-cream transition-colors">Catalogo</Link>
                    <Link href="/pedido-personalizado" className="text-cream/60 hover:text-cream transition-colors">Pedido personalizado</Link>
                    <Link href="/carrito" className="text-cream/60 hover:text-cream transition-colors">Carrito</Link>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <p className="text-gold font-medium mb-1">Contacto</p>
                    <p className="text-cream/60">WhatsApp_ +57 300 000 0000</p>
                    <p className="">Instagram: @muñecostejidos</p>
                </div>
            </div>

            <div className="max-w-6x1 mx-auto mt-8 pt-6 border-t border-white/10 text-center textt-cream/40 text-xs">
                © {new Date().getFullYear()} MuñecosTejidos — Hecho con amor 🧶
            </div>
        </footer>
    );
}