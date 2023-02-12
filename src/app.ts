import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

// const app = fastify({ logger: true })
export const app = fastify()

app.register(cookie)
// A ordem de carregamento dos plugins importa,
// logo se faz necessatio os mais criticos rodarem antes
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
