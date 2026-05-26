"use client";
import { useState } from "react";

const sizes = ["Pequeño (10cm)", "Mediano (20cm)", "Grande (30cm)"];
const colors = ["Rosa pastel", "Azul cielo", "Lila", "Verde menta", "Beige", "Blanco", "Negro"];

export default function PedidoPersonalizado() {
  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "",
    animal: "", size: "", colors: [] as string[],
    details: "", deadline: "",
  });
  const [sent, setSent] = useState(false);

  const toggleColor = (c: string) =>
    setForm(f => ({
      ...f,
      colors: f.colors.includes(c) ? f.colors.filter(x => x !== c) : [...f.colors, c],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pedido:", form);
    setSent(true);
  };

  if (sent)
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-6">
        <p className="text-5xl mb-4">🧶</p>
        <h2 className="font-display text-3xl mb-3">¡Pedido recibido!</h2>
        <p className="text-charcoal/60 max-w-sm">
          Te contactaremos en menos de 24 horas para confirmar los detalles.
        </p>
      </div>
    );

  return (
    <section className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl text-center mb-2">Pedido personalizado</h1>
      <p className="text-center text-charcoal/60 mb-10">
        Cuéntanos cómo quieres tu muñequito y lo hacemos realidad.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white rounded-2xl p-8 shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[["name","Nombre completo","text"],["email","Correo electrónico","email"],
            ["whatsapp","WhatsApp","tel"]].map(([key, label, type]) => (
            <div key={key} className={key === "name" ? "sm:col-span-2" : ""}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input type={type} required value={(form as any)[key]}
                onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5
                  focus:outline-none focus:border-mocha transition-colors" />
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">¿Qué animal o personaje quieres?</label>
          <input type="text" placeholder="Ej: conejo, oso panda, dragón…" required
            value={form.animal}
            onChange={e => setForm(f => ({ ...f, animal: e.target.value }))}
            className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5
              focus:outline-none focus:border-mocha transition-colors" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tamaño</label>
          <div className="flex flex-wrap gap-3">
            {sizes.map(s => (
              <button type="button" key={s} onClick={() => setForm(f => ({ ...f, size: s }))}
                className={`px-4 py-2 rounded-full text-sm border transition-colors
                  ${form.size === s ? "bg-charcoal text-cream border-charcoal" : "border-charcoal/20 hover:border-charcoal"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Colores preferidos</label>
          <div className="flex flex-wrap gap-2">
            {colors.map(c => (
              <button type="button" key={c} onClick={() => toggleColor(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors
                  ${form.colors.includes(c) ? "bg-blush border-blush text-charcoal" : "border-charcoal/20 hover:border-charcoal"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Detalles adicionales</label>
          <textarea rows={4} placeholder="Colores específicos, accesorios, dedicatoria…"
            value={form.details}
            onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
            className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5
              focus:outline-none focus:border-mocha transition-colors resize-none" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">¿Para cuándo lo necesitas?</label>
          <input type="date" value={form.deadline}
            onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
            className="w-full border border-charcoal/20 rounded-xl px-4 py-2.5
              focus:outline-none focus:border-mocha transition-colors" />
        </div>

        <button type="submit"
          className="bg-charcoal text-cream font-semibold py-3 rounded-full
            hover:bg-mocha transition-colors duration-300 text-center">
          Enviar pedido 🧶
        </button>
      </form>
    </section>
  );
}