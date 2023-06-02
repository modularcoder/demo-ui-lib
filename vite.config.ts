import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/ui-core',
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UICore',
      formats: ['es', 'cjs'],
      fileName: 'ui-core',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'ui-core.css'
          return assetInfo.name
        },
      },
    },
  },
  plugins: [
    dts({
      outputDir: 'dist/ui-core',
      clearPureImport: true,
      cleanVueFileName: true,
      staticImport: true,
      insertTypesEntry: false,
      copyDtsFiles: false,
      rollupTypes: true,
    }),
    react()
  ],
})
