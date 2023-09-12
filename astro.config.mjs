import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // site: 'https://Isj-Code.github.io',
  // base: '/iberoweb',
  output: "server",
  adapter: vercel()
});