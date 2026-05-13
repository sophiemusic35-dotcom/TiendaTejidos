"use client";
import { useState } from "react";

const size = ["Pequeño (10cm)", "Mediano (20cm)", "Grande (30cm)"];
const colors = ["Rosa pastel", "Azul cielo", "Lila", "Verde menta", "Beige", "Blanco", "Negro"];

export default function PedidoPersonalizado(){
    const [form, setFrom] = useState({
        name: "", email: "", whatsapp: "",
        animal: "", size: "", colors: [] as string[],
        details: "", deadline: "",
    });
    const [sent, setSent] = useState(false);

    const toggleColor = (c: string) =>
        setFrom(f => ({
            ...f,
            colors: f.colors.includes(c) ? f.colors.filter(x => x !== c) : [...f.colors, c],
        }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //TODO: detectar con tu backend / WhatsApp API / email
        console.log("Pedido:", form);
        setSent(true);
    };

    if (sent)
        return (
        <div className="flex flex-col items-center justify-center py-32 text-center px-6">
            <p className="text-5x1 mb-4">🧶</p>
            <h2 className="font-display text-3x1 mb-3">¡Pedido recibido!</h2>
            <p className="text-charcoal/60 max-w-sm">
                Te contactaremos en menos de 24 horas para confirmar los detalles de tu muñequito.
            </p>
        </div>
        );

    return (
        <section>
            <h1 className="max-w-2x1 mx-auto px-6 py-14">Pedido personalizado</h1>
            <p className="text-center text-charcoal/60 mb-10">
                Cuentanos como quieres tu muñequito y lo hacemos realidad.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white rounded-2x1 p-8 shadow-md">
                {/* Datos personales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["name","Nombre completo","text"],["email","Correo electrónico","email"],
                    ["whatsapp","WhatsApp","tel"]].map(([key, label, type]) => (
                    <div key={key} className={key === "name" ? "sm:col-span-2" : ""}>
                    <label className="block text-sm font-medium mb-1">{label}</label>
                    <input type={type} required value={(form as any)[key]}
                        onChange={e => setFrom(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5
                        focus:outline-none focus:border-mocha transition-colors" />
                    </div>
                ))}
                </div>

                {/* Animal */}
                <div>
                    <label className="block text-sm font-medium mb-1">¿Que personaje o animal quieres</label>
                    <input type="text" placeholder="Ej: conejo, oso panda, dragon..." required value={form.animal} onChange={e => setFrom(F => ({...F, animal: e.target.value}))} className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5 focus:outline-none fcus.border-mocha transition-colors" />
                </div>

                {/* Tamaño */}
                <div>
                    <label className="block text-sm font-medium mb-2">Tamaño</label>
                    <div className="flex flex-wrap gap-3">
                        {size.map(s =>(
                            <button type="button" key={s} onClick={() => setFrom(f => ({ ...f, size: s}))}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${form.size === s ? "bg-charchoal text-cream border-charcoal" : "border-charcoal/20 hover: border-charcoal"}`}> {s} 
                            </button>
                        ))}
                    </div>
                </div>

                {/* Colores */}
                <div>
                    <label className="block text-sm font-medium mb-2">Colores preferidos (Puede elegir varios)</label>
                    <div className="flex flex-wrap gap-2">
                        {colors.map(c => (
                            <button type="button" key={c} onClick={() => toggleColor(c)}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${form.colors.includes(c) ? "bg-blush border-blush text-charcoal" : "border-charcoal/20 hover:border-charcoal"}`}> {c} 
                            </button>
                        ))}
                    </div>
                </div>

                {/* Detalles */}
                <div>
                    <label className="block text-sm font-medium mb-1">Detalles adicionales</label>
                    <textarea rows={4} placeholder="Colores especificos, accesorios, dedicatioria..."
                        value={form.details}
                        onChange={e => setFrom(f => ({...f, details: e.target.value}))}
                        className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5 focus:outline-none focus:border-mocha transition-colors resize-none"/>
                </div>

                {/* Fecha limite */}
                <div>
                    <label className="block text-sm font.medium mb-1">¿Para cuando lo necesitas?</label>
                    <input type="date" value={form.deadline} onChange={e => setFrom(f =>({...f, deadline: e.target.value}))}
                    className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5 focus: outline-none focus.border-mocha transition-colors" />
                </div>

                <button type="submit"
                className="bg-charcoal text-cream font-semibold py-3 rounded-full hover:bg-mocha transition-colors duration-300 text-center">
                    Enviar pedido 🧶
                </button>
            </form>
        </section>
    )
}