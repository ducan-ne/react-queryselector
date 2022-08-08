import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'reactQuerySelector',
      fileName: 'react-queryselector',
    },
  },
  resolve: {
    alias: {
      "@playwright": path.resolve(__dirname, "./node_modules/playwright-core/packages/playwright-core/src/")
    }
  }
})
