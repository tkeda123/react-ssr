import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? 'react-ssr' // レポジトリ名を設定
    : './',
  plugins: [react()],
});
