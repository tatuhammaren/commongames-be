const getData = require('./service.js');

async function routes(fastify) {
  fastify.post('/gamers', async (request, reply) => {
    const { players } = request.body;
    const playersData = await getData(players);

    reply.send(playersData).code(200);
  });
}

module.exports = routes
