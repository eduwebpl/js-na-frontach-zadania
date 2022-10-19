import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    alias({
      entries: {
        vue: 'vue/dist/vue.esm-browser.js',
        'vue-router': 'vue-router/dist/vue-router.esm-browser.js',
      },
    }),
    nodeResolve(),
  ],
}
