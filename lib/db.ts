import { Pool } from "pg";
// Pool= grupo de conexiones reutilizables (mas eficientes que abrir una nueva cada vez)

const pool = new Pool({
    host:   process.env.DB_HOST || "localhost",
    port:   Number(process.env.DB_PORT) || 5432,
    database:   process.env.DB_NAME    || "tienda_tejidos",
    user:   process.env.DB_USER || "postgres",
    password:   process.env.DB_PASSWORD, //Siempre desde variable de entorno
});

//Funcion helper para hacer consultas
export async function query<T = any>(
    sql: string,
    params?: any[]
): Promise<T[]> {
    const result = await pool.query(sql, params);
    return result.rows;  //necesito una buena expliacion de esta parte
}

export default pool