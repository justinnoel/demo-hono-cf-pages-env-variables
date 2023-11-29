import { defineConfig, loadEnv } from 'vite'
import devServer from '@hono/vite-dev-server'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      pages(),
      devServer({
        entry: 'src/index.tsx',
        cf: {
          bindings: {
            TEST_VARIABLE: env.TEST_VARIABLE ?? '',
            VITE_TEST_VARIABLE: env.VITE_TEST_VARIABLE ?? '',
            TEST_HARD_CODED: "hardcoded"
          },
        },
      })
    ]
  
  }
})