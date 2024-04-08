const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const http = require('http')
const cors = require('cors')
const path = require('path')
const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()
const httpServer = http.createServer(app)

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], // Enable graceful shutdown
})

const startApolloServer = async () => {
  await server.start()

  app.use(cors()) // Use CORS
  app.use(express.json()) // Support json encoded bodies
  
  // Apply the Apollo GraphQL middleware and specify the path
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }), // Example context setup
    })
  )

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    })
  }

  db.once('open', () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`)
    })
  })
}

startApolloServer()