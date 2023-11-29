import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  console.log("c.env"); console.log(JSON.stringify(c.env, null, 3));

  return c.render(<h1>Hello!</h1>)
})

export default app
