import react from '@vitejs/plugin-react'
import { defineConfig, transformWithOxc } from 'vite'

// Plugin personnalisé pour transformer le JSX dans les fichiers .js avant l'analyse de Vite
const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.match(/src\/.*\.js$/)) {
      return null
    }
    return await transformWithOxc(code, id, {
      lang: 'jsx',
    })
  },
})

export default defineConfig({
  server: {
    port: 3001,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    transformJsxInJs(),
    react({
      include: /\.(js|jsx|ts|tsx)$/,
    }),
  ],
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
})
