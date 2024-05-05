import { sql } from './db.js';

sql`
    CREATE TABLE products (
        id          TEXT PRIMARY KEY,
        description TEXT
    );
`.then(() => {
    console.log('Table created!')
})