import { sql } from './db.js'

export class DatabasePostgres {

    async list(search) {
        let products

        if(search) {
            products = await sql`select * from products where description ilike "${'%' + search + '%'}"`
        } else {
            products = await sql`select * from products`
        }

        return products;
    }

    async create(product) {
        const { id, description, stock, image_data } = product;

        await sql`INSERT INTO products (id, description, stock, image_data) VALUES (${id}, ${description}, ${stock}, ${image_data})`
    }

    async update(id, product) {
        const { description, stock, image_data } = product;

        await sql`UPDATE products SET description = ${description}, stock = ${stock}, image_data = ${image_data} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`DELETE FROM products WHERE id = ${id}`
    }

}