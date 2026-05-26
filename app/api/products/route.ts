import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { error } from "console";

export async function GET() {
    try {
        const products = await query(`
            SELECT p.*, c.name AS category_name
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.is_active = TRUE
            ORDER BY p.created_at DESC
            `);
            return NextResponse.json(products);
    }catch(err) {
        console.error(err);
        return NextResponse.json({ error: "Error al obtener productos"}, { status: 500});
    }
}