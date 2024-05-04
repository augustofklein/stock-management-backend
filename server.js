import { fastify } from "fastify";

const server = fastify();

server.post('/products', () => {
    return 'Post product'
})

server.get('/products', () => {
    return 'Get products'
})

server.put('/products/:id', () => {
    return 'Put product'
})

server.delete('/products/:id', () => {
    return 'Delete product'
})

server.listen({
    port: 3333
})