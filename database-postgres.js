import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {

    async list(search) {
        let products

        if(search) {
            products = await sql`select * from products where title ilike "${'%' + search + '%'}"`
        } else {
            products = await sql`select * from products`
        }
    }

    async create(product) {
        const productId = randomUUID();
        const { description } = product;

        await sql`INSERT INTO products (id, description) VALUES (${productId}, ${description})`
    }

    async update(id, product) {
        const { description } = video;

        await sql`UPDATE products SET description = ${description} WHERE id = ${ide}`
    }

    async delete(id) {
        await sql`DELETE FROM products WHERE id = ${id}`
    }

}