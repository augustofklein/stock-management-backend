import postgres from "postgres";

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD } = process.env;
const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`

export const sql = postgres(URL, { ssl: 'require' });

export default sql;