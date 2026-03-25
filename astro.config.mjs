import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages URL
  site: 'https://grapaa.github.io',
  base: '/aspaviljongen',
  vite: {
    plugins: [tailwindcss()],
  },
});
