// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import react from "@astrojs/react";


export default defineConfig({
  site: "https://bgcss.casset.cat",
  output: "static",
  integrations: [sitemap(), icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
