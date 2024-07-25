import { defineConfig } from 'astro/config';

const site = import.meta.env.SITE

// https://astro.build/config
export default defineConfig({ site });