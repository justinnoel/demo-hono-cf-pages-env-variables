# Hono and Cloudflare Pages Starter to Demonstrate Environment Variables Don't Work Properly

This project shows that environment variables in the in `.dev.vars` or `.env` files are not read and available in the server.

## Installation
```txt
pnpm install
pnpm run dev
```

```txt
pnpm run deploy
```

## Changes Made from the Default Template

- `.dev.vars` and `.env` files added
  - Each file has the same environment variables.
  - One of the environment variables includes the `VITE_` prefix
- `vite.config.ts` has been modified per examples in [docs](https://hono.dev/getting-started/cloudflare-pages#bindings) and [example](https://github.com/yusukebe/chatgpt-streaming/blob/main/vite.config.ts) to read process environment variables
- `index.ts` attempts to log out the environment variables

## Results

### Expected

```
c.env
{
   "TEST_VARIABLE": "testing",
   "VITE_TEST_VARIABLE": "vite_testing",
   "TEST_HARD_CODED": "hardcoded"
}
```
### Actual

```
c.env
{
   "TEST_VARIABLE": "",
   "VITE_TEST_VARIABLE": "",
   "TEST_HARD_CODED": "hardcoded"
}
```
