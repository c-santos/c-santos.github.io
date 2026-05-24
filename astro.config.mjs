import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://c-santos.github.io",
  integrations: [react()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Literata",
      cssVariable: "--font-literata",
    },
  ],
});
