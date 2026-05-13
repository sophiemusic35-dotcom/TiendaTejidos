import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/tienda/Navbar";
import Footer from "@/components/tienda/Footer";

export const metadata: Metadata = {
  title: "Mi tienda tejidos",
  description: "Muñequitos teidos a mano con amor",
};

export default function RootLayout({ children}: {children: React.ReactNode}){
  return(
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar/>
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}