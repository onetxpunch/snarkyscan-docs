import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  site: "https://docs.snarkyscan.com",
  integrations: [
    starlight({
      title: "Snarkyscan",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      logo: {
        src: "./src/assets/snarkyscanicon.png",
      },
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Block Explorer",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "🏁 Start Here",
              link: "/guides/start-here/",
            },
            {
              label: "🗺️ Overview",
              link: "/guides/overview/",
            },
            {
              label: "🖼️ Diagram",
              link: "/guides/diagram/",
            },
            {
              label: "🛸 Advanced",
              link: "/guides/advanced/",
            },
          ],
        },
        {
          label: "Verified ZkApps",
          autogenerate: {
            directory: "verification",
          },
        },

        {
          label: "Explorer Networks",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Mainnet Snarkyscan.com",
              link: "https://snarkyscan.com",
            },
            {
              label: "Berkeley Snarkyscan.com",
              link: "https://berkeley.snarkyscan.com",
            },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: {
        //     directory: "reference",
        //   },
        // },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});