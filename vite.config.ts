import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    commonjsOptions: {
      include: [/playwright-core/],
    },
    lib: {
      entry: 'src/index.ts',
      name: 'react-queryselector',
      fileName: 'react-queryselector',
    },
  },
  resolve: {
    alias: {
      "@playwright": path.resolve(__dirname, "./node_modules/playwright-core/packages/playwright-core/src/")
    }
  }
})
