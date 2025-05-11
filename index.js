try {
  console.log('Node.js module paths:', module.paths);
  const jsonServer = require('json-server');
  console.log('json-server loaded successfully');
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();
  const port = process.env.PORT || 8080;

  server.use(middlewares);
  server.use(router);

  server.listen(port, () => {
    console.log(JSON Server is running on port ${port});
  });
} catch (error) {
  console.error('Failed to load json-server:', error);
  process.exit(1);
}