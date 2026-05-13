import Link from "next/link";
import { product } from "@/data/products";
import ProductCard from "@/components/tienda/ProductCard";

export default function Home() {
  const featured = product.slice(0, 3);

  return(
    <>
    {/* Hero */}
      <section className="bg-charcoal text-cream py-24 px-6 text-center">
        <p className="text-gold text-sm tracking-widest uppercase mb-3">Hecho a mano con amor </p>
        <h1 className="fonr-display text-5x1 md:text-6x1 mb-6 leading-tight">
          Muñequitos tejidos <br />
          <span className="text-blush">Unicos para ti</span>
        </h1>
        <p className="text-cream/70 max-w-lg mx-auto mb-10 text-lg">
        Cada pieza es tejida a mano con materiales de alta calidad.
        Personaliza el tuyo o elige uno de estos diseños.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/catalogo" className="bg-gold text-charcoal font-semibold px-8 py-3 rounded-full hover:bg-blush transition-colors duration-300">
          Ver catalogo
          </Link>
          <Link href="/pedidio-personalizado" className="border border-cream text-cream px-8 oy-3 rounded-full hover:border-gold hover:text-gold transition-colors duration-300">
          Pedir personalizado
          </Link>
        </div>
      </section>

      {/* Destacados */}
      <section className="max-w-6x1 mx-auto px-6 py-16">
        <h2 className="font-display text-3x1 text-center mb-2">Favoritos de la tienda</h2>
        <p className="text-center text-charcoal/60 mb-10">Los mas queridos por nuestros clientes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link href="/catalogo" className="inline-block border-2 border-charcoal text-charcoal px-8 py-3 rounded-full font-demibold hover:bg-charcoal hover:text-cream transition-colors curation-300">
          Ver todos
          </Link>
        </div>
      </section>

      {/* Banner personalizado */}
      <section className="bg-mocha text-cream py-16 px6 text-center">
        <h2 className="font-display text-3x1 mb-4">¿Quieres uno personalizado'</h2>
        <p className="text-cream/70 max-w-md mx-auto mb-8">
          Elije colores, tamaño y diseño. Creamos el muñequiito de tus sueños.
        </p>
        <Link href="/pedido-personalizado" 
        className="bg-blush text-charcola font-semibold px-8 py-3 rounded-full hover:bg-lavender transition-colors duration-300">
          Hacer mi pedido
        </Link>
      </section>
    </>
  );
}