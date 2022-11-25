const path = require('path');
const fastify = require('fastify')({
  logger: true,
});
const routes = require('./routes');
const config = require('./utils/config');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '../build'),
});

/*
fastify.register(cors, {
  // put your options here
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Accept',
    'Content-Type',
    'Authorization',
    'Access-Control-Allow-Origin',
  ],
  methods: ['POST'],
}); */
fastify.register(routes);
// Run the server!
const start = async () => {
  fastify.listen(config.PORT, '0.0.0.0', (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  });
};

start();
