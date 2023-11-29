import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    pages(),
    devServer({
      entry: 'src/index.tsx',
      cf: {
        bindings: {
          TEST_VARIABLE: process.env.TEST_VARIABLE ?? '',
          VITE_TEST_VARIABLE: process.env.VITE_TEST_VARIABLE ?? '',
          TEST_HARD_CODED: "hardcoded"
        },
      },
    })
  ]
})
