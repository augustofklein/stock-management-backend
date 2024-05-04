import { fastify } from "fastify";
import { DatabasePostgres } from "./database-postgres";

const server = fastify();

const database = new DatabasePostgres();

server.post('/products', async (request, reply) => {

    const { id, description } = request.body;

    await database.create({
        id,
        description
    })

    return reply.status(201).send();
})

server.get('/products', (request) => {

    const search = request.query.search;

    const products = database.list(search);

    return products;
})

server.put('/products/:id', async (request, reply) => {
    const productId = request.params.id;
    const { description } = request.body;

    await database.update(productId, {
        description,
    })

    return reply.status(204).send();
})

server.delete('/products/:id', async (request, reply) => {
    const productId = request.params.id;

    await database.delete(productId);

    return reply.status(204).send();
})

server.listen({
    port: process.env.PGPORT ?? 3333,
})