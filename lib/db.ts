import { Pool } from "pg";

const pool = new Pool({
  host:     process.env.DB_HOST     || "localhost",
  port:     Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME     || "tienda_tejidos",
  user:     process.env.DB_USER     || "postgres",
  password: process.env.DB_PASSWORD,
});

export async function query<T = any>(
  sql: string,
  params?: any[]
): Promise<T[]> {
  const result = await pool.query(sql, params);
  return result.rows;
}

export default pool;