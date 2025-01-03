import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import rewriteAll from 'vite-plugin-rewrite-all';

export default defineConfig({
  plugins: [rewriteAll,react()],
});
