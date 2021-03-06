const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/events/:title?/:id', (req, res) => {
    app.render(req, res, '/EventPage', { id: req.params.id });
  });

  server.get('/ueber-uns', (req, res) => {
    app.render(req, res, '/AboutPage');
  });

  server.get('/organisationen', (req, res) => {
    app.render(req, res, '/OrganizationsPage');
  });

  server.get('/', (req, res) => {
    app.render(req, res, '/HomePage');
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
