import { sql } from './db.js';

sql`DROP TABLE ID EXISTS products;`.then(() => {
    console.log('Table deleted!')
})

sql`
    CREATE TABLE products (
        id          TEXT PRIMARY KEY,
        description TEXT
    );
`.then(() => {
    console.log('Table created!')
})