import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-gold text-xl mb-2">MuñecosTejidos✦</p>
          <p className="text-cream/60 text-sm max-w-xs">
            Cada muñequito es tejido a mano con amor y materiales de calidad.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gold font-medium mb-1">Navegar</p>
          <Link href="/" className="text-cream/60 hover:text-cream transition-colors">Inicio</Link>
          <Link href="/catalogo" className="text-cream/60 hover:text-cream transition-colors">Catálogo</Link>
          <Link href="/pedido-personalizado" className="text-cream/60 hover:text-cream transition-colors">Pedido personalizado</Link>
          <Link href="/carrito" className="text-cream/60 hover:text-cream transition-colors">Carrito</Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-gold font-medium mb-1">Contacto</p>
          <p className="text-cream/60">WhatsApp: +57 300 000 0000</p>
          <p className="text-cream/60">Instagram: @munecostejidos</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-cream/40 text-xs">
        © {new Date().getFullYear()} MuñecosTejidos — Hecho con amor 🧶
      </div>
    </footer>
  );
}