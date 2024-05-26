import { fastify } from "fastify";
import { DatabasePostgres } from "../database-postgres.js";

const server = fastify();

const database = new DatabasePostgres();

server.post('/products', async (request, reply) => {

    const { id, description, stock, image_data } = request.body;

    await database.create({
        id,
        description,
        stock,
        image_data
    })

    return reply.status(201).send();
})

server.get('/products', async (request, reply) => {

    const search = request.query.search;

    try{
        const products = await database.list(search);
        reply.send(products);
    } catch(error) {
        reply.status(500).json({ error: 'An error occurred while fetching products' });
    }
})

server.put('/products/:id', async (request, reply) => {
    const productId = request.params.id;
    const { description, stock, image_data } = request.body;

    await database.update(productId, {
        description,
        stock,
        image_data
    })

    return reply.status(204).send();
})

server.delete('/products/:id', async (request, reply) => {
    const productId = request.params.id;

    await database.delete(productId);

    return reply.status(204).send();
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PGPORT ?? 3333,
})