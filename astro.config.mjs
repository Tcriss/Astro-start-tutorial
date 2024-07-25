import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

const site = import.meta.env.SITE;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [preact()]
});