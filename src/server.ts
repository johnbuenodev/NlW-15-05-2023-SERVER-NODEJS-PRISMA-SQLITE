console.log("Olá john");

import { PrismaClient } from '@prisma/client';

import fastify from 'fastify';

const app = fastify();
const prismaClient = new PrismaClient();

//HTTP METHOD: get post put patch delete

app.get('/', () => {
    return 'Olá mundo';
});

app.get('/users', async () => {
    const users = await prismaClient.user.findMany();

    return users;
});


app.post('/', () => {
    return 'Olá mundo';
});

app.listen({ port:3333, })
.then(response => console.log(response, 'HTTP SERVER running on http://localhost:3333'))
.catch(err => console.log(err));

//49:00