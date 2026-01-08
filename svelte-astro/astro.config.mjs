// @ts-check
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    resolve: {alias: {
        "@": path.resolve("./src"),
        $lib: path.resolve("./src/lib"),
    }},

    plugins: [tailwindcss()]
  }
});